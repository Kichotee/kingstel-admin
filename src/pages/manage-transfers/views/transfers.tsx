import StatusBadge from "@/shared/Table/status-badge";
import { ITransfers } from "@/types";
import { ColumnDef, PaginationState } from "@tanstack/react-table";
import { transfers } from "../../../mockdata";
import { DataTable } from "@/shared/Table/common-table";
import { PageTitle } from "@/shared/UI/general-page-title";
import { useState } from "react";
import { useTransactions } from "@/pages/transactions/queries";
import { IPaginationLink } from "@/lib/api/type";
import { useSearchParams } from "react-router-dom";

const ManageTransfers = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const [searchParams]= useSearchParams();

  const { data, isLoading } = useTransactions({
    current: pagination.pageIndex,
    type: "transfers",
    status:searchParams.get("status")
  });
  const columns: ColumnDef<ITransfers>[] = [
    {
      header: "S/N",
      accessorKey: "id",
    },
    {
      header: "Account Name",
      accessorKey: "meta_data.sender_name",
    },
    {
      header: "currency",
      accessorKey: "currency",
    },
    {
      header: "amount",
      accessorKey: "amount",
      //   cell: (row) => {
      //     return (
      //       <p className="capitalize">{row.getValue() as React.ReactNode}</p>
      //     );
      //   },
      accessorFn: (row) => {
        return ` ${row.currency == "NGN" ? "₦" : "¢"} ${row.amount}`;
      },
    },
    {
      header: "Date",
      accessorKey: "created_at",
    },
    {
      header: "Transaction ID",

      accessorKey: "reference",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (row) => {
        //  @ts-expect-error type error

        return <StatusBadge value={row.getValue()} />;
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
    <div className="flex flex-col gap-4 items-center">
      <input
        type="text"
        className="py-2.5 mx-auto bg-white  placeholder:text-center w-full max-w-[639px] rounded-[15px] placeholder:text-xs"
        placeholder="Search customer by Phone Number, Email, BVN, Kingstelpay tag 🔍"
      />
      <div className="w-full space-y-8">
        <PageTitle title="Completed Transfers" />
        <div className="w-full">
          <DataTable<ITransfers>
            pagination={pagination}
            setPagination={setPagination}
            pageCount={data?.total as number}
            currentPage={data?.current_page as number}
            columns={columns}
            paginationLinks={data?.links as IPaginationLink[]}
            loading={isLoading}
            data={data?.data || []}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageTransfers;
