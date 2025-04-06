import { Button } from "@/components/ui/button";
import { useGetSingleCustomer } from "@/pages/customers/queries";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { ExchangeRate, useEditExchangeRate } from "../queries";
import { validCountriesOptions } from "@/shared/constants";
import { createListCollection } from "@chakra-ui/react";
import { ControlledSelect } from "@/shared/UI/select/select";
import { useMemo } from "react";

const EditRates = () => {
  const location = useLocation();
//   console.log(location.state);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { control, handleSubmit } = useForm<any>({
    defaultValues: useMemo(() => {
      return {
        from: location.state.from,
        to: location.state.to,
        rate: location.state.rate,
      };
    }, [location.state]),
  });
  const { id } = useParams();
  const { data } = useGetSingleCustomer(id as string);
  console.log(data);

  const { updateRates, isPending } = useEditExchangeRate();

  const onSubmit = async (data: ExchangeRate) => {
    await updateRates(data);
  };
  const countryCollection = createListCollection({
    items: validCountriesOptions,
  });
  return (
    <div className="space-y-[52px] w-full ">
      <p className="font-semibold text-center">Edit rate</p>
      <div className="p-[43px_37px] shadow-[0px_4px_10px_0_#D1DFFE80] rounded-[14px]  max-w-[426px] mx-auto bg-white">
        <div className="flex flex-col gap-36">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <ControlledSelect
                collection={countryCollection}
                options={validCountriesOptions}
                variant={"outline"}
                control={control}
                name="from"
                size="lg"
                label="Transfer from"
                placeholder="Select country"
              />

              <ControlledSelect
                collection={countryCollection}
                options={validCountriesOptions}
                variant={"outline"}
                control={control}
                name="to"
                size="lg"
                label="Transfer to"
                placeholder="Select currency"
              />
              <ControlledInput
                variant={"outline"}
                control={control}
                name="rate"
                size="lg"
                label="Rate"
                placeholder="Transfer charge"
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

export default EditRates;
