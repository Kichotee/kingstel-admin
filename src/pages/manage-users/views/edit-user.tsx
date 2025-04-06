/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useGetSingleCustomer } from "@/pages/customers/queries";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useUpdateateAdmin } from "../queries";

const EditUser = () => {
  const { control, handleSubmit } = useForm();
  const { id } = useParams();
  const { data } = useGetSingleCustomer(id as string);
  console.log(data);
  

  const { updateAdminFn,isPending } = useUpdateateAdmin();

  const onSubmit = async (data: any) => {
    data.name = data.first_name + " " + data.last_name;
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
                name="first_name"
                size="lg"
                label="first Name"
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
              <ControlledInput
                variant={"outline"}
                control={control}
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
            className="bg-brand-primary text-white rounded-xl"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
