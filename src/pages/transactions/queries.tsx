import instance from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const getTransactions = async () => {
  try {
    const response = await instance.get("/admin/transactions");
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
const platformOverview = async () => {
  try {
    const response = await instance.get("/admin/transactions");
    return response.data;
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
