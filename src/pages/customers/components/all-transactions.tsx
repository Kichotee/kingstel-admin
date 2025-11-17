import StatusBadge from "@/shared/UI/Table/status-badge";
import { ITransaction } from "@/types";
import { ColumnDef, PaginationState } from "@tanstack/react-table";

import { format } from "date-fns";
// import { transactionsData } from "../../../mockdata";
import { DataTable } from "@/shared/UI/Table/common-table";
import { useTransactions } from "@/pages/transactions/queries";
import { useState } from "react";
import { IPaginationLink } from "@/lib/api/type";
import { formatCurrencyNumber } from "@/lib/format-currency";



const AllTransactions = () => {
    const [pagination, setPagination] = useState<PaginationState>({
      pageIndex: 1,
      pageSize: 10,
    });
  const { data, isLoading } = useTransactions({current:pagination.pageIndex});
console.log(data);

  // console.log(format("2024-10-30T12:45:30.000000Z","dd/MM/yyyy"))

  const columns: ColumnDef<ITransaction>[] = [
      // {
      //   header: "S/N",
      //   accessorKey: "id",
      // },
    {
      header: "Customer",
      // eslint-disable-next-line no-constant-binary-expression, @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      accessorKey: "meta_data.reciever_name"||"meta_data.sender_name",
      cell: (row) => {
        return (
          <p className=" capitalize ">{row.getValue()?.toString()?.toLocaleLowerCase() || "-" as React.ReactNode}</p>
        );
      },
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
          <p className="capitalize">{row.getValue()   as React.ReactNode}</p>
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
        return formatCurrencyNumber(row?.amount);
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
        data={(data?.data?.data?.data as ITransaction[]) || []}
      />
    </div>
  );
};

export default AllTransactions;
