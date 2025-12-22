/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
// import { currencies } from "@/mockdata";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { DataTable } from "@/shared/UI/Table/common-table";
import { ColumnDef, PaginationState } from "@tanstack/react-table";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ICurrency } from "../types";
import { useCreateCurrency, useGetCurrencies } from "../queries";
import { useState } from "react";

const ManageCurrencies = () => {
  const { control, handleSubmit } = useForm();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { currencies } = useGetCurrencies();
  const columns: ColumnDef<ICurrency>[] = [
    {
      header: "S/N",
      accessorKey: "id",
    },
    {
      header: "currency",
      accessorKey: "name",
      cell: (row) => {
        return <p className="capitalize">{row.getValue() as string}</p>;
      },
    },
    {
      header: "code",
      accessorKey: "code",
    },
    {
      header: "status",
      accessorKey: "status",
      cell: (row) => {
        return (
          <button className="text-[#2FBE22] capitalize">
            {row.getValue() as string}
          </button>
        );
      },
    },
    {
      header: "Action",
      accessorKey: "SN",
      cell: (row) => {
        return (
          <Link to={`/dashboard/edit-currency/${row.getValue()}`}>
            {" "}
            <button className="text-brand-primary">Edit</button>
          </Link>
        );
      },
    },
    
  ];
  const { createCurrency, isPending } = useCreateCurrency();
  const onSubmit = async (body: any) => {
    const data = {
      ...body,
    };
    // console.log(data);

    await createCurrency(data);
  };
  return (
    <div className="space-y-7">
      <p className="font-semibold">Manage currency</p>
      <div className="flex gap-[18px]">
        <div className="basis-2/5 bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
            <p className="font-semibold text-center">Add new currency</p>
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-5">
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="name"
                  size="lg"
                  label="Currency Name"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="Country"
                  size="lg"
                  label="Country"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="code"
                  size="lg"
                  label="ISO Code"
                />
                {/* <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="iso_code"
                  size="lg"
                  label="HTML currency code"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="iso_code"
                  size="lg"
                  label="System flag code"
                /> */}
              </div>
              <Button
                loading={isPending}
                variant="default"
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="basis-3/5 bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
            <p className="font-semibold">Available currencies</p>
            <DataTable<ICurrency>
              columns={columns}
              pagination={pagination}
              setPagination={setPagination}
              
              pageCount={currencies?.total as number}
              currentPage={currencies?.current_page as number}
              data={currencies?.data || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCurrencies;
