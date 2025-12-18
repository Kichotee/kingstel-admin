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
import { Center, createListCollection, Menu, Portal, useDisclosure } from "@chakra-ui/react";
import { LuEllipsis, LuMenu } from "react-icons/lu";
import { FaV } from "react-icons/fa6";
import { MarkupModal } from "../components/markup-modal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useUpdateMarkup } from "@/pages/manage-currency/queries";

const ManageCharges = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { control, handleSubmit } = useForm<any>();
  const { ratesData, isLoading } = useGetRates();
  const {  onOpen, onClose } = useDisclosure();
  const [selectedRow, setSelectedRow] = useState<ICharge | null>(null);

  console.log(ratesData);

  const { addRates } = usePostExchangeRate();

  const onSubmit = async (data: ExchangeRate) => {
    await addRates(data);
  };

  const {mutateAsync,isPending}= useUpdateMarkup()


  const handleUpdateMarkup = async (percentage: string, id: string) => {
   await mutateAsync({id, value: percentage});
    console.log("Update markup with percentage:", percentage, selectedRow);
    // Add your update logic here
  };

  const handleEditMarkup = (percentage: string) => {
    console.log("Edit markup with percentage:", percentage, selectedRow);
    // Add your edit logic here
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
        return (
          <>
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                  <LuEllipsis />
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item
                    className=" cursor-pointer"
                      value="edit"
                      onClick={() => {
                        setSelectedRow(row.row.original);
                        onOpen();
                      }}
                    >
                      Edit
                    </Menu.Item>  
                    {/* <Menu.Item
                      value="update"
                      onClick={() => {
                        setSelectedRow(row.row.original);
                        onOpen();
                      }}
                    >
                     
                    </Menu.Item> */}
                     <MarkupModal
                     onUpdate={(percentage)=>{
                      console.log("Updating markup from menu:", percentage);
                        if(selectedRow) {
                          handleUpdateMarkup(percentage, row.row.original.SN);
                        }
                      }}/>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </>
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
      <MarkupModal
        // isOpen={isOpen}
        onClose={onClose}
        onUpdate={handleUpdateMarkup}
        onEdit={handleEditMarkup}
      />
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
              background={`#0F00BD`}
              color="white" 
                variant="solid"
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
