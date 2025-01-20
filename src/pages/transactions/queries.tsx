import instance from "@/lib/api";
import { MultiResponse } from "@/lib/api/type";
import { ITransaction } from "@/types";
import { useQuery } from "@tanstack/react-query";

type TransactionResponse= MultiResponse<ITransaction>

const getTransactions = async () => {
  try {
    const response = await instance.get<TransactionResponse>("/admin/transaction");
    return response.data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
const platformOverview = async () => {
  try {
    const response = await instance.get("/admin/details");
    return response.data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

export const usePlatformOverview = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["platform-overview"],
    queryFn: () => {
      return platformOverview();
    },
  });
  return { data, isLoading };
};
export const useTransactions = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => {
      return getTransactions();
    },
  });
  return { data, isLoading };
};
