/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ICreateCurrencyPayload, ICurrency } from "./types";
import { MultiResponse, SingleResponseData } from "@/lib/api/type";
import { toaster } from "@/components/ui/toaster";

const getCurrencies = async () => {
  try {
    const response = await instance.get<MultiResponse<ICurrency>>(
      "/exchange/getCurrencies"
    );

    return response.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.message || error?.response?.message);
  }
};
const createCurrency = async (body: ICreateCurrencyPayload) => {
  try {
    const response = await instance.post<SingleResponseData<ICurrency>>(
      "/admin/create_currency",
      body
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.message || error?.response?.message);
  }
};

export const useGetCurrencies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["currencies"],
    queryFn: () => {
      return getCurrencies();
    },
  });
  return { currencies: data, isLoading };
};

export const useCreateCurrency = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (body: ICreateCurrencyPayload) => {
      return createCurrency(body);
    },
    onSuccess(data) {
      toaster.create({
        description: data?.message,
        type: "success",
      });
    },
    onError(error) {
      toaster.create({
        description: error?.message ?? error,
        type: "error",
      });
    },
  });
  return { createCurrency: mutateAsync, isPending };
};
