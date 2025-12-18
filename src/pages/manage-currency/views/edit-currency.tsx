import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { useForm } from "react-hook-form";

const EditCurrency = () => {
  const { control } = useForm();
  return (
    <div className="space-y-[52px] w-full ">
      <p className="font-semibold text-center">Configure currency</p>
      <div className="p-[43px_37px] shadow-[0px_4px_10px_0_#D1DFFE80] rounded-[14px]  max-w-[426px] mx-auto bg-white">
        <div className="flex flex-col gap-36">
          <div className="flex flex-col gap-5">
            <ControlledInput
              variant={"outline"}
              control={control}
              name="from"
              size="lg"
              label="From"
              placeholder="Select currency"
            />
            <ControlledInput
              variant={"outline"}
              control={control}
              name="to"
              size="lg"
              label="To"
              placeholder="Select currency"
            />
            <ControlledInput
              variant={"outline"}
              control={control}
              name="rate"
              size="lg"
              label="Rate"
            />
          </div>
          <Button variant="primary">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditCurrency;
