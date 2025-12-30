import { Button } from "@/components/ui/button";
import { DataTable } from "@/shared/UI/Table/common-table";
import { PageTitle } from "@/shared/UI/general-page-title";
import { IFee } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

import {
  useGetFees,
  useGetSingleCharge,
  useUpdateCharge,
  useToggleChargeStatus,
  useDeleteCharge,
} from "../queries";

import { LuEllipsis } from "react-icons/lu";

import { useState } from "react";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ViewChargeSheet } from "../components/view-charge-sheet";
import { UpdateChargeSheet } from "../components/update-charge-sheet";
import { DeleteConfirmDialog } from "../components/delete-confirm-dialog";
import { ToggleStatusDialog } from "../components/toggle-status-dialog";

const ManageFees = () => {
  const { feesData, isLoading } = useGetFees();

  const [isModalOpen, setIsModalOpen] = useState(0);
  const [isViewOpen, setIsViewOpen] = useState(0);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [chargeToDelete, setChargeToDelete] = useState<IFee | null>(null);
  const [toggleDialogOpen, setToggleDialogOpen] = useState(false);
  const [chargeToToggle, setChargeToToggle] = useState<IFee | null>(null);

  const { charge, singleChargeLoading } = useGetSingleCharge(
    isViewOpen || isModalOpen
  );
  const { updateChargeFn, isPending } = useUpdateCharge();
  const { toggleStatusFn, isPending: isToggling } = useToggleChargeStatus();
  const { deleteChargeFn, isPending: isDeleting } = useDeleteCharge();

  const handleOpenUpdateModal = (chargeData: IFee) => {
    setIsModalOpen(chargeData.id);
  };

  const handleToggleStatus = (charge: IFee) => {
    setChargeToToggle(charge);
    setToggleDialogOpen(true);
  };

  const handleConfirmToggle = async () => {
    if (chargeToToggle) {
      await toggleStatusFn(chargeToToggle.id.toString());
      setToggleDialogOpen(false);
      setChargeToToggle(null);
    }
  };

  const handleOpenDeleteDialog = (charge: IFee) => {
    setChargeToDelete(charge);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (chargeToDelete) {
      await deleteChargeFn(chargeToDelete.id.toString());
      setDeleteDialogOpen(false);
      setChargeToDelete(null);
    }
  };

  const onUpdateSubmit = async (data: Partial<IFee>) => {
    if (isModalOpen) {
      await updateChargeFn({
        id: isModalOpen.toString(),
        data,
      });
      setIsModalOpen(0);
    }
  };

  const columns: ColumnDef<IFee>[] = [
    {
      header: "S/N",
      accessorKey: "id",
    },
    {
      header: "Service",
      accessorKey: "name",
    },

    {
      header: "Charge",
      accessorKey: "charge",
      cell: (info) => {
        return Number(info.getValue());
      },
    },
    {
      header: "Description ",
      accessorKey: "description",
    },
    {
      header: "Active ",
      accessorKey: "is_active",
      cell: (info) => {
        return (
          <Badge
            className={info.getValue() ? "bg-brand-primary" : " bg-red-500"}
            variant={info.getValue() ? "default" : "destructive"}
          >
            {info.getValue() ? "Active" : "Inactive"}
          </Badge>
        );
      },
    },
    {
      header: "Action",
      accessorKey: "id  ",
      cell: (row) => {
        return (
          <>
            <DropdownMenu
              modal={false}
              // onOpenChange={() => setSelectedRow(row.row.original.id)}
            >
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <LuEllipsis />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className=" text-sm">
                <DropdownMenuItem className=" text-sm">
                  <Button
                    onClick={() => setIsViewOpen(row.row.original.id)}
                    variant="ghost"
                    className=""
                  >
                    View
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem className=" text-sm">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      handleOpenUpdateModal(row.row.original);
                    }}
                  >
                    Update Markup
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem className=" text-sm">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      handleToggleStatus(row.row.original);
                    }}
                  >
                    {row.row.original.is_active ? "Deactivate" : "Activate"}
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem className=" text-sm">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      handleOpenDeleteDialog(row.row.original);
                    }}
                  >
                    Delete Markup
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ViewChargeSheet
              open={isViewOpen === row.row.original.id}
              onOpenChange={() => setIsViewOpen(0)}
              charge={charge}
              isLoading={singleChargeLoading}
            />
            <UpdateChargeSheet
              open={isModalOpen === row.row.original.id}
              onOpenChange={(open) => {
                if (!open) {
                  setIsModalOpen(0);
                }
              }}
              charge={charge}
              isLoading={singleChargeLoading}
              onSubmit={onUpdateSubmit}
              isPending={isPending}
              onOpenModalChange={setIsModalOpen}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="space-y-7">
      <div className="w-full bg-white">
        <div className="p-[43px_37px] flex flex-col gap-[52px]">
          <PageTitle title="Fees" />
          <DataTable<IFee>
            columns={columns}
            loading={isLoading}
            data={feesData?.data || []}
          />
        </div>
      </div>

      <DeleteConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        charge={chargeToDelete}
        isPending={isDeleting}
        onConfirm={handleConfirmDelete}
      />

      <ToggleStatusDialog
        open={toggleDialogOpen}
        onOpenChange={setToggleDialogOpen}
        charge={chargeToToggle}
        isPending={isToggling}
        onConfirm={handleConfirmToggle}
      />
    </div>
  );
};

export default ManageFees;
