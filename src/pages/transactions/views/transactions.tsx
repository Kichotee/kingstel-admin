import StatusBadge from "@/shared/Table/status-badge";
import { ITransactions } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { transactionsData } from "../../../../mockdata";
import { DataTable } from "@/shared/Table/common-table";

const Transactions = () => {
  const columns: ColumnDef<ITransactions>[] = [
    {
      header: "S/N",
      accessorKey: "meta_data.date",
    },
    {
      header: "Customer",
      accessorKey: "customer",
    },
    {
      header: "Description",
      accessorKey: "description",
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
      accessorKey: "wallet",
    },
    {
      header: "Amount",
      //   accessorKey: "amount",
      accessorFn: (row) => {
        return row.amount;
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
      header: "Timestamp",
      accessorKey: "timestamp",
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
      <DataTable<ITransactions>
        columns={columns}
        loading={false}
        data={transactionsData}
      />
    </div>
  );
};

export default Transactions;
