import { Button } from "@/components/ui/button";
import { chargeData,  } from "@/mockdata";
import { ControlledInput } from "@/shared/input/Controllednput";
import { DataTable } from "@/shared/Table/common-table";
import { PageTitle } from "@/shared/UI/general-page-title";
import {  ICharge } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ManageCharges = () => {
  const { control, watch } = useForm();
  const columns: ColumnDef<ICharge>[] = [
    {
      header: "S/N",
      accessorKey: "SN",
    },
    {
      header: "Country",
      accessorKey: "country",
    },
    {
      header: "currency",
      accessorKey: "currency",
    },
    {
      header: "Charge",
      accessorKey: "charge",
    },
    {
      header: "Percaentage",
      accessorKey: "percentage",
    },
   
    {
      header: "Action",
      accessorKey: "SN",
      cell: (row) => {
        return (
          <Link to={`/dashboard/edit-user/${row.getValue()}`}>
            {" "}
            <button className="text-brand-primary">Edit</button>
          </Link>
        );
      },
    },
  ];
  return (
    <div className="space-y-7">
     <PageTitle title={"Manage User"}/>
      <div className="flex gap-[18px]">
        <div className="basis-2/5 bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
            <p className="font-semibold text-center">Add new charge</p>
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-5">
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="currency"
                  size="lg"
                  label="Transfer from"
                  placeholder="Select country"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="Country"
                  size="lg"
                  label="Transfer to"
                  placeholder="Select country"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="currency"
                  size="lg"
                  label="Currency"
                  placeholder="elect currency"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="charge"
                  size="lg"
                  label="Charge"
                  placeholder="Transfer charge"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="iso_code"
                  size="lg"
                  label="Percentage%"
                  placeholder="Percentage"
                />
             
              </div>
              <Button
                className="bg-brand-primary text-white rounded-xl"
                onClick={() => {
                  console.log(watch());
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="basis-3/5 bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
          <PageTitle title="Charges"/>
            <DataTable<ICharge> columns={columns} data={chargeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCharges;
