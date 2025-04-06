import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/shared/UI/input/Controllednput";
import { DataTable } from "@/shared/UI/Table/common-table";
import { PageTitle } from "@/shared/UI/general-page-title";
import { ICharge } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ExchangeRate, useGetRates, usePostExchangeRate } from "../queries";
import { ControlledSelect } from "@/shared/UI/select/select";
import { validCountriesOptions } from "@/shared/constants";
import { createListCollection } from "@chakra-ui/react";

const ManageCharges = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { control,  handleSubmit } = useForm<any>();
  const { ratesData, isLoading } = useGetRates();
  console.log(ratesData);


  const {addRates}= usePostExchangeRate()

  const onSubmit = async (data: ExchangeRate) => {
    await addRates(data);
  };

  const columns: ColumnDef<ICharge>[] = [
    {
      header: "S/N",
      accessorKey: "SN",
    },
    {
      header: "From",
      accessorKey: "from",
    },
    {
      header: "To",
      accessorKey: "to",
    },
    {
      header: "Charge",
      accessorKey: "rate",
      cell: (info) => {
        return Number(info.getValue());
      },
    },
    {
      header: "Action",
      accessorKey: "from",
      cell: (row) => {
        console.log(row.row.original);
        return (
          <Link
            to={{ pathname: `/dashboard/manage-charge/edit-rates/${row.getValue()+"-"+row.row.original.to}` }}
            state={row.row.original}
          >
            {" "}
            <button className="text-brand-primary">Edit</button>
          </Link>
        );
      },
    },
  ];
  const countryCollection = createListCollection({
    items: validCountriesOptions,
  });
  return (
    <div className="space-y-7">
      <PageTitle title={"Manage User"} />
      <div className="flex gap-[18px]">
        <div className="basis-2/5 bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
            <p className="font-semibold text-center">Add new charge</p>
            <div className="flex flex-col gap-20">
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
                {/* <ControlledInput
                  variant={"outline"}
                  control={control}
                  name="iso_code"
                  size="lg"
                  label="Percentage%"
                  placeholder="Percentage"
                /> */}
              </div>
              <Button
                className="bg-brand-primary text-white rounded-xl"
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="basis-3/5 bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
            <PageTitle title="Charges" />
            <DataTable<ICharge>
              columns={columns}
              loading={isLoading}
              data={ratesData || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCharges;
