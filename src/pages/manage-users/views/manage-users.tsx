import { Button } from "@/components/ui/button";
import { currencies } from "@/mockdata";
import { ControlledInput } from "@/shared/input/Controllednput";
import { DataTable } from "@/shared/Table/common-table";
import { ICurrencies } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const { control, watch } = useForm();
  const columns: ColumnDef<ICurrencies>[] = [
    {
      header: "S/N",
      accessorKey: "SN",
    },
    {
      header: "currency",
      accessorKey: "currency",
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
  return (
    <div className="space-y-7">
      <p className="font-semibold">Manage user</p>
      <div className="flex gap-[18px]">
        <div className="basis-2/5 bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
            <p className="font-semibold text-center">Create new user</p>
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-5">
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="currency"
                  size="lg"
                  label="first Name"
                  placeholder="Enter first Name"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="Country"
                  size="lg"
                  label="Last name"
                  placeholder="Enter Last name"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="Country"
                  size="lg"
                  label="Email address"
                  placeholder="Enter Email address"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="Country"
                  size="lg"
                  label="Password"
                  placeholder="Enter Password"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="iso_code"
                  size="lg"
                  label="Phone number"
                  placeholder="Enter Phone number"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="iso_code"
                  size="lg"
                  label="Role"
                  placeholder="Select Role"
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
            <p className="font-semibold">Available Admin users</p>
            <DataTable<ICurrencies> columns={columns} data={currencies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
