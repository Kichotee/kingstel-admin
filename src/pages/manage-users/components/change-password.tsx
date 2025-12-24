import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { useForm } from "react-hook-form";
import { usePasswordChange } from "../queries";
import { IChangeUserPassword } from "@/types";

const ChangePassword = () => {
  const { control, handleSubmit } = useForm<IChangeUserPassword>();

  const { changePassFn, isPending } = usePasswordChange();

  const onSubmit = async (body: IChangeUserPassword) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirm_password, ...rest } = body;
    await changePassFn(rest);
  };

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
          loading={isPending}
          variant="default"
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default ChangePassword;
