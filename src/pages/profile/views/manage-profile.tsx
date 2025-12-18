import { Button } from "@/components/ui/button";

import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { PageTitle } from "@/shared/UI/general-page-title";
import { useForm } from "react-hook-form";
import ChangePassword from "@/pages/manage-users/components/change-password";

const ManageProfile = () => {
  const { control } = useForm();

  // console.log(data);

  //   const { createAdminFn, isPending } = useCreateAdmin();
  //   const onSubmit = async (body: ICreateUser) => {
  //     const data = {
  //       ...body,
  //       name: body.first_name + " " + body.last_name,
  //       role: body.role,
  //     };
  //     // console.log(data);

  //     await createAdminFn(data);
  //   };
  return (
    <div className="space-y-7 max-w-[80%]">
      <PageTitle title={"Manage Profile"} />
      <div className="flex gap-[18px]">
        <div className="basis-1/2 bg-white">
          <ChangePassword />
        </div>
        <div className="basis-1/2 bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
            <PageTitle title="Available Admin users" />
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
              {/* <ControlledInput
                  variant={"outline"}
                  control={control}
                  type="password"
                  name="password"
                  size="lg"
                  label="Password"
                  placeholder="Enter Password"
                  /> */}
              <ControlledInput
                variant={"outline"}
                control={control}
                name="phone_number"
                size="lg"
                label="Phone number"
                placeholder="Enter Phone number"
              />

              <ControlledInput
                variant={"outline"}
                control={control}
                name="email"
                size="lg"
                label="Email address"
                placeholder="Enter Email address"
              />
            </div>
            <Button
              variant="primary"
              // onClick={handleSubmit(onSubmit)}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
