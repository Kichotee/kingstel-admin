import instance from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export type AnalyticsResponse = {
  month: string;
  active_customers: number | string;
  inactive_customers: number | string;
}[];

const getAnalytics = async () => {
  try {
    const result = await instance.get<{ data: AnalyticsResponse }>(
      "/admin/get_customer_stats"
    );
    return result.data.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
export const useGetAnalytics = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getAnalytics();
    },
    queryKey: ["analytics"],
  });
  return { analytics: data, isLoading };
};
