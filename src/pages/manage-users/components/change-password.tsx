import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { usePasswordChange } from "../queries";
import { IChangeUserPassword } from "@/types";

const changePasswordSchema = yup.object().shape({
  old_password: yup.string().required("Current password is required"),
  new_password: yup
    .string()
    .required("New password is required")
    .notOneOf(
      [yup.ref("old_password")],
      "New password must be different from current password"
    ),
  confirm_password: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("new_password")], "Passwords must match"),
});

const ChangePassword = () => {
  const { control, handleSubmit } = useForm<IChangeUserPassword>({
    resolver: yupResolver(changePasswordSchema),
  });

  const { changePassFn, isPending } = usePasswordChange();

  const onSubmit = async (body: IChangeUserPassword) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirm_password, ...rest } = body;
    await changePassFn(rest);
  };

  return (
    <div className="p-[43px_37px] flex flex-col gap-[52px]">
      <p className="font-semibold ">Change Password</p>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <ControlledInput
            variant={"outline"}
            control={control} 
            type="password"
            name="old_password"
            size="lg"
            label="Current Password"
            placeholder="Enter current password"
            helperText={control._formState.errors.old_password?.message as string}
          />
          <ControlledInput
            variant={"outline"}
            control={control} 
            type="password"
            name="new_password"
            size="lg"
            label="Enter new Password"
            placeholder="Enter Last name"
            helperText={control._formState.errors.new_password?.message as string}

          />
          <ControlledInput
            variant={"outline"}
            control={control} 
            type="password"
            name="confirm_password"
            size="lg"
            label="Confirm Password"
            placeholder="Re enter new password"
            helperText={control._formState.errors.confirm_password?.message as string}

          />
        </div>
        <Button
          loading={isPending}
          className=" bg-brand-primary"
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
