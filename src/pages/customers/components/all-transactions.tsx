import StatusBadge from "@/shared/Table/status-badge";
import { ITransaction } from "@/types";
import { ColumnDef, PaginationState } from "@tanstack/react-table";

import { format } from "date-fns";
// import { transactionsData } from "../../../mockdata";
import { DataTable } from "@/shared/Table/common-table";
import { useTransactions } from "@/pages/transactions/queries";
import { useState } from "react";
import { IPaginationLink } from "@/lib/api/type";



const AllTransactions = () => {
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 1,
      pageSize: 10,
    });
  const { data, isLoading } = useTransactions({current:pagination.pageIndex});
console.log(data);

  // console.log(format("2024-10-30T12:45:30.000000Z","dd/MM/yyyy"))

  const columns: ColumnDef<ITransaction>[] = [
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
      <DataTable<ITransaction>
        pagination={pagination}
        setPagination={setPagination}
        pageCount={data?.data?.data.total as number}
        currentPage={data?.current_page as number}
        columns={columns}
        paginationLinks={data?.data?.links as IPaginationLink[]}
        loading={isLoading}
        data={(data?.data?.data as ITransaction[]) || []}
      />
    </div>
  );
};

export default AllTransactions;
