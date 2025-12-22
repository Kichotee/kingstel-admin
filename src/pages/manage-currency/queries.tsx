/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/api";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { ICreateCurrencyPayload, ICurrency } from "./types";
import { MultiResponse, SingleResponseData } from "@/lib/api/type";
import { toast } from "sonner";

const getCurrencies = async () => {
  try {
    const response = await instance.get<MultiResponse<ICurrency>>(
      "/exchange/getCurrencies"
    );

    return response.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.response?.message);
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
    throw new Error(error?.response?.data?.message || error?.response?.message);
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
  const queryClient = new QueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (body: ICreateCurrencyPayload) => {
      return createCurrency(body);
    },
    onSuccess(data) {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["currencies"],
      });
    },
    onError(error) {
      toast.error(error?.message ?? error);
    },
  });
  return { createCurrency: mutateAsync, isPending };
};

export const useUpdateMarkup = () => {
  const queryClient = new QueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: ({ id, value }: { id: string; value: string }) => {
      console.log("Updating markup in mutation:", id, value);
      return instance.put(`/admin/exchange-rates/${id}`, {
        markup_percentage: value,
      });
    },

    onSuccess(data) {
      queryClient.invalidateQueries({
        queryKey: ["charges"],
      });
      toast.success(data?.data?.message);
    },
    onError(error) {
      toast.error(error?.message ?? error);
    
    },
  });
  return { onUpdate: mutateAsync, isPending };
};
