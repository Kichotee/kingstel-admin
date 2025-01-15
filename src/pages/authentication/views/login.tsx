import { Button } from "@/components/ui/button";
import CircularProgress from "@/shared/CircularProgress";
import Logo from "@/shared/icons/logo";
import { ControlledInput } from "@/shared/input/Controllednput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    type ILoginPayload = {
        email: string;
        password: string;
      };
      const {control,formState:{errors}}= useForm()
  return (
    <div className="bg-neutral-commonBg min-h-screen gap-[25px] flex flex-col justify-center items-center">
      <div className="rounded-md">
        <Logo />
      </div>
         <div className="bg-white min-w-[30%]  items-center p-[25px_26px] rounded-[30px]">
        <div className="flex  flex-col gap-16">
          <div className="flex flex-col gap-2.5 text-center">
            <p className="font-semibold text-[15px] leading-[22.5px]">Welcome back</p>
            <p className="text-sm leading-[0.8em]">Sign in with your email</p>
          </div>
          <div className=" flex flex-col gap-[60px] w-full">
            <div className="flex flex-col gap-5">
              <ControlledInput
                control={control}
                placeholder=""
                label="Email address"
                name="email"
                type="email"
                size="lg"
                // errors={errors}
                
              />
              <ControlledInput
              size="lg"
                control={control}
                label="Password"
                name="password"
                type="password"
                // errors={errors}
                // className="py-3"
                
              />
              <div className="">
                <Link to="/forgot-password">
                  <button>
                    <p className="text-[#aaa] fonr-semibold text-xs">Forgot your password</p>
                  </button>
                </Link>
              </div>
            </div>
            <Button
            //   themeColor="main"
             
              className="w-full flex justify-center items-center"
              type="submit"
            //   onClick={handleSubmit(onSubmit)}
            >
              {false ? <CircularProgress size={24} color="white" /> : "Sign in"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
