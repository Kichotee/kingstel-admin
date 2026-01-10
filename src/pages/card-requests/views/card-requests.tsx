import { DataTable } from "@/shared/UI/Table/common-table";
import StatusBadge from "@/shared/UI/Table/status-badge";
import { ColumnDef } from "@tanstack/react-table";
import { CardRequestsCard } from "../components/card-requests-card";
import {
  Popover,
  PopoverTrigger,
  
  PopoverContent,

} from "@/components/ui/popover";
import { VscEllipsis } from "react-icons/vsc";
import { PageTitle } from "@/shared/UI/general-page-title";
import { AcceptModal } from "../components/accept-modal";
import {  useFreezeCard, useGetCards, useUnfreezeCard } from "../queries";
import { CardRequest } from "@/lib/api/type";
import { format } from "date-fns";
import { DeclineModal } from "../components/decline-modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ViewCardDetailsSheet } from "../components/view-card-details-sheet";


export const CardRequests = () => {
  const { requestData } = useGetCards();

  // const { approveCardFn, isPending } = useApprovecard();
  const{ freezeCardFn,  freezeLoading } = useFreezeCard();
  const {unfreezeCardFn,  unfreezeLoading } = useUnfreezeCard();

  const [freezeDialogOpen, setFreezeDialogOpen] = useState(false);
  const [freezeReference, setFreezeReference] = useState<string>("");
  const [viewSheetOpen, setViewSheetOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardRequest | undefined>();

  const handleOpenFreezeDialog = (ref: string) => {
    setFreezeReference(ref);
    setFreezeDialogOpen(true);
  };

  const handleConfirmFreeze = async (ref: string) => {
    await freezeCardFn({ ref });
    setFreezeDialogOpen(false);
    setFreezeReference("");
  };

  const handleOpenViewSheet = (card: CardRequest) => {
    setSelectedCard(card);
    setViewSheetOpen(true);
  };

  const columns: ColumnDef<CardRequest>[] = [
    {
      header: "S/N",
      accessorKey: "id",
    },
    {
      header: "name",
      accessorKey: "name_on_card",
    },
    {
      header: "email",
      accessorKey: "email",
    },
    {
      header: "Card type",
      accessorKey: "type",
    },
    {
      header: "Request Date",
      accessorKey: "created_at",
      accessorFn: (row) => {
        return format(new Date(row?.created_at), "dd/MM/yyyy");
      },
    },
    {
      header: "Date Issued",
      accessorKey: "date_issued",
      accessorFn: (row) => {
        return format(new Date(row?.created_at), "dd/MM/yyyy");
      },
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (row) => {
        //  @ts-expect-error type error

        return <StatusBadge value={row.getValue()} />;
      },
    },

    {
      header: "Action",
      accessorKey: "reference",
      cell: (row) => {
        return (
          <div className="relative ">
            <Popover >
              <PopoverTrigger asChild>
                <Button size="sm" variant="outline">
                  <VscEllipsis />
                </Button>
              </PopoverTrigger>
              <PopoverContent side="left" className="absolute  z-50 max-w-[90px]   p-0 bg-white shadow-none">

                  <div className="flex flex-col gap-4 *:border-b  text-sm">
                    <Button
                      variant="ghost"
                      className="hover:bg-transparent"
                      onClick={() => handleOpenViewSheet(row.row.original)}
                    >
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      className="hover:bg-transparent"
                      onClick={() => handleOpenFreezeDialog(row.getValue() as string)}
                    >
                      Freeze
                    </Button>
                    <DeclineModal
                      isPending={unfreezeLoading}
                      acceptFn={unfreezeCardFn}
                      reference={row.getValue() as string}
                    />

                    {/* <Link to={`/dashboard/customers/${row.getValue() as string}`}>
                      <Button className="p-[10px_20px] border-b">
                        Profile
                      </Button>
                    </Link> */}
                  </div>
              
              </PopoverContent>
            </Popover>
          </div>
        );
      },
    },
  ];
  const card = [
    {
      type: "approved",
      value: requestData?.data.filter((req) => {
        return req.status == "success";
      }).length,
    },
    {
      type: "pending",
      value: requestData?.data.filter((req) => {
        return req.status == "pending";
      }).length,
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <input
        type="text"
        className="py-2.5 bg-white  placeholder:text-center w-full max-w-[639px] rounded-[15px] placeholder:text-xs"
        placeholder="Search customer by Phone Number, Email, BVN, Kingstelpay tag 🔍"
      />
      <div className="space-y-12 w-full">
        <div className="space-y-6">
          <PageTitle title="Card requests" />
          {/* <div className="px-14 py-[61px] rounded-2xl w-max bg-white flex gap-40">
            {card.map((data) => {
              return (
                <CardRequestsCard
                  type={data.type as "approved" | "pending" | "declined"}
                  value={data.value as number}
                />
              );
            })}
          </div> */}
        </div>
        <DataTable<CardRequest>
          columns={columns}
          data={requestData?.data || []}
        />
      </div>

      <AcceptModal
        open={freezeDialogOpen}
        onOpenChange={setFreezeDialogOpen}
        reference={freezeReference}
        isPending={freezeLoading}
        onConfirm={handleConfirmFreeze}
      />

      <ViewCardDetailsSheet
        open={viewSheetOpen}
        onOpenChange={setViewSheetOpen}
        card={selectedCard}
        isLoading={false}
      />
    </div>
  );
};
