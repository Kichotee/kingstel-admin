import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { useForm } from "react-hook-form";

const EditCompliance = () => {
  const { control } = useForm();
  return (
    <div className="flex justify-center pt-20 items-center h-[80vh]">
        <div className="flex flex-col gap-7 w-max">
          <p className="font-semibold mx-auto">Personal Information</p>
          <div className="bg-white *:mx-auto  p-[102px_37px] flex flex-col gap-12 items-center">
              <div className="flex gap-12 items-baseline ">
                <div className="flex-col flex gap-5">
                  <ControlledInput
                    control={control}
                    label="Full name"
                    size="lg"
                    name="name"
                  />
                  <ControlledInput
                    control={control}
                    label="Phone number"
                    size="lg"
                    name="phone"
                  />
                  <ControlledInput
                    control={control}
                    label="country"
                    size="lg"
                    name="country"
                  />
                    <ControlledInput
                      control={control}
                      label="city"
                      size="lg"
                      name="city"
                    />
                  <ControlledInput
                    control={control}
                    label="BVN"
                    size="lg"
                    name="bvn"
                  />
                </div>
                <div className="flex-col flex gap-5">
                  <ControlledInput
                    control={control}
                    label="Gender"
                    size="lg"
                    name="gender"
                  />
                  <ControlledInput
                    control={control}
                    label="State"
                    size="lg"
                    name="state"
                  />
                  <ControlledInput
                    control={control}
                    label="Address"
                    size="lg"
                    name="address"
                  />
                    <ControlledInput
                      control={control}
                      label="Name on BVN"
                      size="lg"
                      name="bvn_name"
                    />
              
                </div>
              </div>
          <Button mx={"auto"} w={"max"} bg={"#0F00BD"} p={3} color={"white"}>Ask to upload</Button>
          </div>
        </div>
    </div>
  );
};

export default EditCompliance;
