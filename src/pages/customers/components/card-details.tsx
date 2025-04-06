import { PageTitle } from "@/shared/UI/general-page-title";
import { CardBox } from "./card-box";
import { UserCardTransactions, UserResponse } from "@/types";
import { useGetCardTransactions } from "../queries";
import { useState } from "react";
import { PaginationState, ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { DataTable } from "@/shared/UI/Table/common-table";
import { useParams } from "react-router-dom";


type IProp = {
  card?: UserResponse["cards"];
};

const CardDetails = ({ card }: IProp) => {  

     const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 1,
        pageSize: 10,
      });
      const {id}=useParams()
  const {cardTranscts}= useGetCardTransactions(id as string)
  const columns: ColumnDef<UserCardTransactions>[] = [
    {
      header: "S/N",
      accessorKey: "id",
    },
    {
      header: "Customer",
      accessorKey: "name",
    },
    {
      header: "email",
      accessorKey: "email",
    },
    {
      header: "description",
      accessorKey: "type",
    },
    {
      header: "Type",
      accessorKey: "transaction_type",
      cell: (row) => {
        return (
          <p className="capitalize">{row.getValue() as React.ReactNode}</p>
        );
      },
    },
    {
      header: "Wallet",
      accessorKey: "currency_type",
    },
    {
      header: "Amount",
      //   accessorKey: "amount",
      accessorFn: (row) => {
        return row?.amount;
      },
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (row) => {
        //  @ts-expect-error type error

        return <StatusBadge value={row?.getValue()} />;
      },
    },
    {
      header: "Timestamp",
      accessorKey: "created_at",
      accessorFn: (row) => {
        return format(new Date(row?.created_at), "dd/MM/yyyy");
      },
    },
    // {
    //   header: "Action",
    //   accessorKey: "action",
    //   cell: () => {
    //     return (
    //       <button className="mx-auto">
    //         <BsChevronRight />
    //       </button>
    //     );
    //   },
    // },

    //...
  ];
  return (
    <div className="">
      <div className="flex justify-center gap-7">
        <CardBox card={card} />
        <div className="bg-white   text-xs w-[342px]">
          <div className=" flex border-b font-medium border-[#D1DFFE]">
            <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">Card Name</p>
            <p className="basis-3/5 p-[12px_24px] capitalize">{card?.name_on_card}</p>
          </div>
          <div className=" flex border-b font-medium border-[#D1DFFE]">
            <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">Card Number</p>
            <p className="basis-3/5 p-[12px_24px]">
              {card?.pan.slice(0, 4) +
                "   " +
                card?.pan.slice(4, 8) +
                "   " + "  "+
                card?.pan.slice(8, 12) +
                "   " +
                card?.pan.slice(12, 16)}
            </p>
          </div>
          <div className=" flex border-b font-medium border-[#D1DFFE]">
            <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">Expiry date</p>
            <p className="basis-3/5 p-[12px_24px]">{card?.expiry_year}</p>
          </div>
          <div className=" flex border-b font-medium border-[#D1DFFE]">
            <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">cvv</p>
            {/* <p className="basis-3/5 p-[12px_24px]">{card?.cvv ?? "-"}</p> */}
          </div>
          <div className=" flex border-b font-medium border-[#D1DFFE]">
            <p className="basis-2/5 text-[#0F00BD] p-[12px_24px]">Status</p>
            <p className="basis-3/5 p-[12px_24px]">Restricted</p>
          </div>
        </div>
      </div>

      <div className="py-8 space-y-6">
        <PageTitle title="Recent transactions" />

         <DataTable<UserCardTransactions>
               pagination={pagination}
               setPagination={setPagination}
              //  pageCount={data?.data?.data.total as number}
              //  currentPage={data?.current_page as number}
               columns={columns}
              //  paginationLinks={data?.data?.links as IPaginationLink[]}
              //  loading={isLoading}
               data={(cardTranscts?.data?.data as UserCardTransactions[]) || []}
             />
      </div>
    </div>
  );
};

export default CardDetails;
