import { DataTable } from "../../../shared/Table/common-table";
import { BarChart } from "../components/bar-chart";
import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "../../../shared/Table/status-badge";
import { transactionsData } from "../../../mockdata";
import { ITransactions } from "../../../types";
import { PageTitle } from "@/shared/UI/general-page-title";

const Dashboard = () => {
  const overview = [
    {
      icon: "/icons/transaction.png",
      title: "SUCCESSFUL TRANSACTIONS",
      number: "500",
    },
    {
      icon: "/icons/money-bag.png",
      title: "AVAILABLE CURRENCIES",
      number: "3",
    },
    {
      icon: "/icons/person.png",
      title: "TOTAL CUSTOMERS",
      number: "200",
    },
  ];
  const columns: ColumnDef<ITransactions>[] = [
    {
      header: "SN",
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
    <div className="flex flex-col gap-[30px] text-black font-poppins">
       
      <input
        type="text"
        className="py-2.5 mx-auto bg-white  placeholder:text-center w-full max-w-[639px] rounded-[15px] placeholder:text-xs"
        placeholder="Search customer by Phone Number, Email, BVN, Kingstelpay tag 🔍"
      />
      <div className="gap-y-6 flex flex-col w-full items-center">
        <div className="flex flex-col w-full gap-6">
        <PageTitle title="Quick Overview"/>
          <div className="rounded-[20px] bg-white p-[61px_58px] flex gap-4 justify-between">
            {overview.map((data) => {
              return (
                <div className="flex max-h-[216px] min-w-[220px] flex-col gap-4 items-center rounded-[30px] border border-[#D1DFFE80] py-[22px] shadow-[4px_4px_10px_1.4px_#D1DFFE80] px-2.5">
                  <img src={data.icon} className="max-w-[74px]" alt="" />
                  <p className="text-brand-primary text-sm font-semibold">
                    {data.title}
                  </p>
                  <p className="font-bold">{data.number}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white w-full p-5 rounded-[20px]">
          <BarChart data={""} />
        </div>
        <div className="bg-white w-full p-5 rounded-2xl">
          <DataTable<ITransactions>
            columns={columns}
            loading={false}
            data={transactionsData}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
