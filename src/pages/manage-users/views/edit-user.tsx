/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useGetSingleUser, useUpdateateAdmin } from "../queries";
import { ControlledSelect } from "@/shared/UI/select/select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EditUserFormData } from "@/types";
// ...existing code...



const editUserSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().required("Email is required").email("Please enter a valid email"),
  password: yup.string().notRequired().test(
    "min-length",
    "Password must be at least 6 characters",
    (value) => !value || value.length >= 6
  ),
  phone: yup.string().required("Phone number is required").min(10, "Phone number must be at least 10 digits"),
  role: yup.string().required("Role is required"),
}) as yup.ObjectSchema<EditUserFormData>;



const EditUser = () => {
  const { id } = useParams();
  const { data } = useGetSingleUser(id as string);
  console.log(data);

  const defaultValues = useMemo(
    () => ({
      name: data?.first_name || "",
      
      email: data?.email || "",
      password: "",
      phone: data?.phone || data?.phone_number || "",
      role: data?.role || "",
    }),
    [data]
  );
  console.log(defaultValues,"defaultValues");

  const { control, handleSubmit } = useForm<EditUserFormData>({
    defaultValues,
    values: defaultValues,
    resolver: yupResolver(editUserSchema),
  });

  const userOptions = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "superAdmin",
      label: "Super Admin",
    },
  ];

  const { updateAdminFn, isPending } = useUpdateateAdmin();

  const onSubmit = async (data: EditUserFormData) => {
    
    await updateAdminFn({ body: data, id: id as string });
  };
  return (
    <div className="space-y-[52px] w-full ">
      <p className="font-semibold text-center">Edit user</p>
      <div className="p-[43px_37px] shadow-[0px_4px_10px_0_#D1DFFE80] rounded-[14px]  max-w-[426px] mx-auto bg-white">
        <div className="flex flex-col gap-36">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <ControlledInput
                variant={"outline"}
                control={control}
                name="name"
                size="lg"
                label="Name"
                placeholder="Enter Name"
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
                name="password"
                type="password"
                size="lg"
                label="Password"
                placeholder="Enter Password"
              />
              <ControlledInput
                variant={"outline"}
                control={control}
                name="phone"
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
          </div>
          <Button
            onClick={handleSubmit(onSubmit)}
            loading={isPending}
            variant="default"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
