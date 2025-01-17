import instance from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const getCardDetails = async (id:string, email:string) => {
    try {
      const response = await instance.get(`/admin/transactions?email=${email}&id=${id}`);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };
const getCustomers = async () => {
    try {
      const response = await instance.get(`/admin/user`);
      return response.data.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  };

  export const useGetCardDetails = (id:string, email:string) => {
    const { data, isLoading } = useQuery({
      queryKey: ["card-details",id,email],
      queryFn: () => {
        return getCardDetails(id,email);
      },
    });
    return { data, isLoading };
  }
export const useGetAllCustomers = () => {
    const { data, isLoading } = useQuery({
      queryKey: ["customers"],
      queryFn: ()=> getCustomers(),
    });
    return { customers:data, isLoading };
  }