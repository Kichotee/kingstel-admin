import { cardRequests } from "@/mockdata";
import { DataTable } from "@/shared/Table/common-table";
import StatusBadge from "@/shared/Table/status-badge";
import { ICardRequests } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { CardRequestsCard } from "../components/card-requests-card";
import {
  PopoverRoot,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Dialog,
} from "@chakra-ui/react";
import { VscEllipsis } from "react-icons/vsc";
import { PageTitle } from "@/shared/UI/general-page-title";
import { AcceptModal } from "../components/accept-modal";

export const CardRequests = () => {
  const columns: ColumnDef<ICardRequests>[] = [
    {
      header: "S/N",
      accessorKey: "SN",
    },
    {
      header: "name",
      accessorKey: "name",
    },
    {
      header: "email",
      accessorKey: "email",
    },
    {
      header: "Card type",
      accessorKey: "card_type",
    },
    {
      header: "Request Date",
      accessorKey: "request_date",
    },
    {
      header: "Date Issued",
      accessorKey: "date_issued",
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
      accessorKey: "date_issued",
      cell: () => {
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
                   <AcceptModal/>
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
      value: 40,
    },
    {
      type: "pending",
      value: 5,
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
                  value={data.value}
                />
              );
            })}
          </div>
        </div>
        <DataTable<ICardRequests> columns={columns} data={cardRequests} />
      </div>
     
    </div>
  );
};
