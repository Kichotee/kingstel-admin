import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const { control } = useForm();

  return (
    <div className="p-[43px_37px] flex flex-col gap-[52px]">
      <p className="font-semibold text-center">Change Password</p>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <ControlledInput
            variant={"outline"}
            control={control}
            name="current_password"
            size="lg"
            label="Current Password"
            placeholder="Enter current password"
          />
          <ControlledInput
            variant={"outline"}
            control={control}
            name="new_password"
            size="lg"
            label="Enter new Password"
            placeholder="Enter Last name"
          />
          <ControlledInput
            variant={"outline"}
            control={control}
            name="confirm_password"
            size="lg"
            label="Confirm Password"
            placeholder="Re enter new password"
          />
        </div>
        <Button
          className="bg-brand-primary text-white rounded-xl"
          // onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default ChangePassword;
