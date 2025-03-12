/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import CircularProgress from "@/shared/CircularProgress";
import Logo from "@/shared/UI/icons/logo";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLogin } from "../queries";

const Login = () => {
  type ILoginPayload = {
    email: string;
    password: string;
  };
  const { login, isPending } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPayload>();

  const onSubmit = async (body: ILoginPayload) => {
 
    await login(body);
  };
  return (
    <div className="bg-neutral-commonBg min-h-screen gap-[25px] flex flex-col justify-center items-center">
      <div className="rounded-md">
        <Logo />
      </div>
      <div className="bg-white min-w-[30%]  items-center p-[25px_26px] rounded-[30px]">
        <div className="flex  flex-col gap-16">
          <div className="flex flex-col gap-2.5 text-center">
            <p className="font-semibold text-[15px] leading-[22.5px]">
              Welcome back
            </p>
            <p className="text-sm leading-[0.8em]">Sign in with your email</p>
          </div>
          <div className=" flex flex-col gap-[60px] w-full">
            <div className="flex flex-col gap-5 w-full =">
              <ControlledInput<ILoginPayload>
                control={control}
                placeholder=""
                label="Email address"
                name="email"
                size="lg"
                type="email"
                errors={errors}
              />
              <ControlledInput<ILoginPayload>
                size="lg"
                control={control}
                label="Password"
                name="password"
                type="password"
                errors={errors}
              />
              <div className="">
                <Link to="/forgot-password">
                  <button>
                    <p className="text-[#aaa] fonr-semibold text-xs">
                      Forgot your password
                    </p>
                  </button>
                </Link>
              </div>
            </div>
            <Button
              onClick={handleSubmit(onSubmit)}
              //   themeColor="main"

              className="w-full flex bg-brand-primary rounded-xl justify-center items-center"
              type="submit"
              //   onClick={handleSubmit(onSubmit)}
            >
              {isPending ? (
                <CircularProgress size={24} color="white" />
              ) : (
                "Sign in"
              )}
            </Button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
