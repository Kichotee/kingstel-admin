import { Button } from "@/components/ui/button";

import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { DataTable } from "@/shared/UI/Table/common-table";
import { PageTitle } from "@/shared/UI/general-page-title";
import { ICreateUser, IUsers } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useCreateAdmin, useGetUsers } from "../queries";
import { ControlledSelect } from "@/shared/UI/select/select";
// import { createListCollection } from "@chakra-ui/react";

const ManageUsers = () => {
  const { control, handleSubmit } = useForm<ICreateUser>();

  const userOptions = [
    {
      value: "Admin",
      label: "Admin",
    },
  ];
  // const userCollection = createListCollection({ items: userOptions });
  const { data } = useGetUsers();
  console.log(data);
  const columns: ColumnDef<IUsers>[] = [
    {
      header: "S/N",
      accessorKey: "id",
    },
    {
      header: "name",
      accessorKey: "name",
    },
    {
      header: "email",
      accessorKey: "email",
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
      accessorKey: "id",
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

  const { createAdminFn, isPending } = useCreateAdmin();
  const onSubmit = async (body: ICreateUser) => {
    const data = {
      ...body,
      name: body.first_name + " " + body.last_name,
      role: body.role,
    };
    // console.log(data);

    await createAdminFn(data);
  };
  return (
    <div className="space-y-7">
      <PageTitle title={"Manage User"} />
      <div className="flex gap-[18px]">
        <div className="basis-2/5 bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
            <p className="font-semibold text-center">Create new user</p>
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-5">
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="first_name"
                  size="lg"
                  label="First Name"
                  placeholder="Enter first Name"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="last_name"
                  size="lg"
                  label="Last name"
                  placeholder="Enter Last name"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="email"
                  size="lg"
                  label="Email address"
                  placeholder="Enter Email address"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  type="password"
                  name="password"
                  size="lg"
                  label="Password"
                  placeholder="Enter Password"
                />
                <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="phone_number"
                  size="lg"
                  label="Phone number"
                  placeholder="Enter Phone number"
                />

                <ControlledSelect
                  // collection={userCollection}
                  variant={"outline"}
                  control={control}
                  options={userOptions}
                  name="role"
                  size="lg"
                  label="Role"
                  placeholder="Select Role"
                />
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
            <PageTitle title="Available Admin users" />
            <DataTable<IUsers> columns={columns} data={data?.data || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
