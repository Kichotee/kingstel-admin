/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { DataTable } from "@/shared/UI/Table/common-table";
import { PageTitle } from "@/shared/UI/general-page-title";
import { ICharge } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

import { ExchangeRate, useGetRates, usePostExchangeRate } from "../queries";

import { validCountriesOptions } from "@/shared/constants";

import { LuEllipsis } from "react-icons/lu";

import { MarkupModal } from "../components/markup-modal";
import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useUpdateMarkup } from "@/pages/manage-currency/queries";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ManageCharges = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const { ratesData, isLoading } = useGetRates();

  const [selectedRow, setSelectedRow] = useState<ICharge | null>(null);
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<string>("");

  console.log(ratesData);

  const { addRates } = usePostExchangeRate();

  const { onUpdate, isPending } = useUpdateMarkup();

  const handleUpdateMarkup = async (id: string, percentage: string) => {
    await onUpdate({ id, value: percentage });
    console.log("Update markup with percentage:", percentage, selectedRow);
    // Add your update logic here
  };

  const [isModalOpen, setIsModalOpen] = useState(0);

  // Get unique transaction types for filter options
  const transactionTypes = useMemo(() => {
    console.log(ratesData);
    if (!ratesData?.data) return [];
    const types = new Set(
      ratesData?.data?.map((item) => item?.transaction_type).filter(Boolean)
    );
      
    return Array.from(types);
  }, [ratesData]);

  // Filter data based on selected transaction type
  const filteredData = useMemo(() => {
    if (selectedTransactionType == '-') return ratesData?.data || [];
    return (ratesData?.data || []).filter(
      (item) => item.transaction_type === selectedTransactionType
    );
  }, [ratesData?.data, selectedTransactionType]);

  const columns: ColumnDef<ICharge>[] = [
    {
      header: "S/N",
      accessorKey: "id",
    },
    {
      header: "From",
      accessorKey: "from_currency",
    },
    {
      header: "To",
      accessorKey: "to_currency",
    },
    {
      header: "Base Rate ",
      accessorKey: "base_rate",
    },
    {
      header: "Charge",
      accessorKey: "markup_percentage",
      cell: (info) => {
        return Number(info.getValue()) + "%";
      },
    },
    {
      header: "Marked up Rate ",
      accessorKey: "rate",
    },
    {
      header: "Action",
      accessorKey: "id  ",
      cell: (row) => {
        return (
          <>
            <DropdownMenu
              modal={false}
              // onOpenChange={() => setSelectedRow(row.row.original.id)}
            >
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <LuEllipsis />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedRow(row.row.original);
                    setIsModalOpen(row.row.original.id);
                  }}
                >
                  Update Markup
                </Button>

                <DropdownMenuItem></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        );
      },
    },
  ];
  // console.log(transactionTypes, ratesData);
  return (
    <div className="space-y-7">
      <PageTitle title={"Manage Rates"} />

      <MarkupModal
        isPending={isPending}
        open={isModalOpen === selectedRow?.id}
        onOpenChange={() => setIsModalOpen(0)}
        rate={selectedRow?.rate?.toString()}
        onConfirm={async (percentage) => {
          if (!selectedRow) return;
          return await handleUpdateMarkup(
            selectedRow?.id.toString(),
            percentage
          );
        }}
      />
      <div className="flex justify-center gap-[18px]">
        {/* <div className="basis-2/5 bg-white">
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
        </div> */}
        <div className=" w-full bg-white">
          <div className="p-[43px_37px] flex flex-col gap-[52px]">
            <div className="flex gap-4 items-center">
              <PageTitle title="Rates " />
              <div className="flex gap-4">
                <div className="w-48">
                  {ratesData && (
                    <Select
                      value={selectedTransactionType}
                      onValueChange={setSelectedTransactionType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by transaction type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="-">All Types</SelectItem>
                        {transactionTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>
            </div>
            <DataTable<ICharge>
              columns={columns}
              loading={isLoading}
              data={filteredData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCharges;
