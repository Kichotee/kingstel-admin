import StatusBadge from "@/shared/Table/status-badge";
import { ITransactions } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { transactionsData } from "../../../mockdata";
import { DataTable } from "@/shared/Table/common-table";
import { PageTitle } from "@/shared/UI/general-page-title";
import AllTransactions from "@/pages/customers/components/all-transactions";

const Transactions = () => {
  const columns: ColumnDef<ITransactions>[] = [
    {
      header: "S/N",
      accessorKey: "SN",
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
    {
      header: "Action",
      accessorKey: "SN",
      cell: () => {
        return (
          <button className="mx-auto text-brand-primary">
            Edit
          </button>
        );
      },
    },

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
        <PageTitle title="Customer Transactions"/>
        <div className="w-full">
          {/* <DataTable<ITransactions>
            columns={columns}
            loading={false}
            data={transactionsData}
          /> */}
          <AllTransactions/>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
