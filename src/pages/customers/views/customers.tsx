import { ICustomers } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { customersData } from "../../../mockdata";
import { DataTable } from "@/shared/Table/common-table";
import { PageTitle } from "@/shared/UI/general-page-title";
import { Link } from "react-router-dom";

const Customers = () => {
  const columns: ColumnDef<ICustomers>[] = [
    {
      header: "S/N",
      accessorKey: "SN",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Phone",
      accessorKey: "phone",
    },
    {
      header: "bvn",
      accessorKey: "BVN",
      cell: (row) => {
        return (
          <p className="capitalize">{row.getValue() as React.ReactNode}</p>
        );
      },
    },
   
    {
      header: "Action",
      accessorKey: "SN",
      cell: (row) => {
        return (
          <Link to={`/dashboard/customers/${row.getValue()}`}>
            <button className="mx-auto text-brand-primary">
              View
            </button>
          </Link>
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
        <PageTitle title="All Customers"/>
        <div className="w-full">
          <DataTable<ICustomers>
            columns={columns}
            loading={false}
            data={customersData}
           
            
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
