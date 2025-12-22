/* eslint-disable @typescript-eslint/no-explicit-any */


import instance from "@/lib/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export type ExchangeRate = {
  to_currency: string;
  from_currency: string;
  charge: string;
};

const getCharges = async () => {
  try {
    const result = await instance.get("/admin/exchange-rates");
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
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    
    },
  });
  return { addRates: mutateAsync, isPending };
};

export const useEditExchangeRate = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateExchangeRate,
    onSuccess: (data) => {
      toast.success(data.message);  
   
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateRates: mutateAsync, isPending };
};
