import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/shared/input/Controllednput";
import { useForm } from "react-hook-form";

const EditUser = () => {
  const { control } = useForm();
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
          </div>
          <Button className="bg-brand-primary text-white rounded-xl">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
