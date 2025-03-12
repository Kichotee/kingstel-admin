import { ICustomers } from "@/types";
import { ColumnDef, PaginationState } from "@tanstack/react-table";
import { DataTable } from "@/shared/UI/Table/common-table";
import { PageTitle } from "@/shared/UI/general-page-title";
import { Link } from "react-router-dom";
import { useGetAllCustomers } from "../queries";
import { format } from "date-fns";
import { useState } from "react";
import { IPaginationLink } from "@/lib/api/type";

const Customers = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const { customers, isLoading } = useGetAllCustomers(pagination.pageIndex);

  console.log(customers?.data);
  const columns: ColumnDef<ICustomers>[] = [
    {
      header: "S/N",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "first_name",
      cell: (row) => {
        return row?.getValue();
      },
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Phone",
      accessorKey: "phone_number",
    },
    {
      header: "Joined",
      accessorKey: "created_at",
      accessorFn: (row) => {
        return format(new Date(row?.created_at), "dd/MM/yyyy");
      },
    },
    // {
    //   header: "bvn",
    //   accessorKey: "BVN",
    //   cell: (row) => {
    //     return (
    //       <p className="capitalize">{row.getValue() as React.ReactNode}</p>
    //     );
    //   },
    // },

    {
      header: "Action",
      accessorKey: "id",
      cell: (row) => {
        return (
          <Link to={`/dashboard/customers/${row.getValue()}?email=${row.row.original.email}`}>
            <button className="mx-auto text-brand-primary">View</button>
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
        <PageTitle title="All Customers" />
        <div className="w-full">
          <DataTable
            columns={columns}
            pagination={pagination}
            setPagination={setPagination}
            paginationLinks={customers?.data?.links as IPaginationLink[]}
            pageCount={customers?.data?.total as number}
            currentPage={customers?.data?.current_page as number}
            loading={isLoading}
            data={customers?.data?.data || []}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
