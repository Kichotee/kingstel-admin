
import { DataTable } from "@/shared/Table/common-table";
import StatusBadge from "@/shared/Table/status-badge";
import { ColumnDef } from "@tanstack/react-table";
import { CardRequestsCard } from "../components/card-requests-card";
import {
  PopoverRoot,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "@chakra-ui/react";
import { VscEllipsis } from "react-icons/vsc";
import { PageTitle } from "@/shared/UI/general-page-title";
import { AcceptModal } from "../components/accept-modal";
import { useApprovecard, useGetCards } from "../queries";
import { CardRequest } from "@/lib/api/type";
import { format } from "date-fns";

export const CardRequests = () => {
  const { requestData } = useGetCards();

  const {approveCardFn, isPending}= useApprovecard()
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
    // {
    //   header: "Date Issued",
    //   accessorKey: "date_issued",
    //   accessorFn: (row) => {
    //     return format(new Date(row?.date_issued), "dd/MM/yyyy");
    //   },
    // },
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
            <PopoverRoot lazyMount unmountOnExit>
              <PopoverTrigger asChild>
                <Button size="sm" variant="outline">
                  <VscEllipsis />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="absolute  z-50 -left-[100%] -top-[100%] max-w-[87px]  p-0 bg-white shadow-none">
                <PopoverArrow />
                <PopoverBody className="p-0">
                  <div className="flex flex-col gap-4 *:border-b  text-sm">
                    <AcceptModal isPending={isPending} acceptFn={approveCardFn} reference={row.getValue() as string}/>
                    <Button className="p-[10px_20px] border-b">Decline</Button>
                    <Button className="p-[10px_20px] border-b">Profile</Button>
                  </div>
                </PopoverBody>
              </PopoverContent>
            </PopoverRoot>
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
          <div className="px-14 py-[61px] rounded-2xl w-max bg-white flex gap-40">
            {card.map((data) => {
              return (
                <CardRequestsCard
                  type={data.type as "approved" | "pending" | "declined"}
                  value={data.value as number}
                />
              );
            })}
          </div>
        </div>
        <DataTable<CardRequest>
          columns={columns}
          data={requestData?.data || []}
        />
      </div>
    </div>
  );
};
