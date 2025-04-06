/* eslint-disable @typescript-eslint/no-explicit-any */
import { toaster } from "@/components/ui/toaster";
import instance from "@/lib/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export type ExchangeRate = {
  to_currency: string;
  from_currency: string;
  charge: string;
};

const getCharges = async () => {
  try {
    const result = await instance.get("/exchange/get_exchange_rate");
    return result?.data?.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

const postExchangeRate = async (data: ExchangeRate) => {
  try {
    const res = await instance.post("/admin/create-exchange", data);

    return res.data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
const updateExchangeRate = async (data: ExchangeRate) => {
  try {
    const res = await instance.put("/admin/update/exchange-rate", data);

    return res?.data;
  } catch (error: any) {
    console.log(error.response.data.message ??  error.response.message);
    throw new Error(error.response.data.message ?? error.response.message);
  }
};

export const useGetRates = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getCharges();
    },
    queryKey: ["charges"],
  });
  return { ratesData: data, isLoading };
};

export const usePostExchangeRate = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: postExchangeRate,
    onSuccess: (data) => {
      toaster.create({
        description: data.message,
        type: "success",
      });
    },
    onError: (error) => {
      toaster.create({
        description: error.message,
        type: "error",
      });
    },
  });
  return { addRates: mutateAsync, isPending };
};

export const useEditExchangeRate = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateExchangeRate,
    onSuccess: (data) => {
      toaster.create({
        description: data.message,
        type: "success",
      });
    },
    onError: (error) => {
      toaster.create({
        description: error.message,
        type: "error",
      });
    },
  });
  return { updateRates: mutateAsync, isPending };
};
