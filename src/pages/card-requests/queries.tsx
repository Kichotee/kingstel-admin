/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { CardRequest, SingleResponseData } from "@/lib/api/type";
import { toaster } from "@/components/ui/toaster";

const getCardRequests = async () => {
  try {
    const res = await instance.get<SingleResponseData<CardRequest[]>>(
      "/admin/card"
    );
    return res.data;
  } catch (error: any) {
    throw new Error(error?.data?.message || error?.message);
  }
};
const approveCard = async (ref: string, status: boolean) => {
  try {
    const res = await instance.put(`/admin/card_approve?reference=${ref}`, {
      status: status,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error?.data?.message || error?.message);
  }
};



export const useGetCards = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["cards"],
    queryFn: getCardRequests,
  });
  return { requestData: data, isLoading };
};
export const useApprovecard = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["approveCard"],
    mutationFn: ({ ref, status }: { ref: string; status: boolean }) => {
      return approveCard(ref, status);
    },
    onSuccess() {
      toaster.success({
        description: "Card approved",
      });
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });
  return { approveCardFn: mutateAsync, isPending };
};
