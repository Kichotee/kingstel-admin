/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { CardRequest, SingleResponseData } from "@/lib/api/type";
import { toast } from "sonner";

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
const freezeCard = async (ref: string) => {
  try {
    const res = await instance.post(`/admin/bridge-card/freeze/${ref}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.data?.message || error?.message);
  }
};
const unfreezeCard = async (ref: string) => {
  try {
          const res = await instance.post(`/admin/bridge-card/freeze/${ref}`);
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
      toast.success("Card approved");
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });
  return { approveCardFn: mutateAsync, isPending };
};
export const useFreezeCard = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["freezeCard"],
    mutationFn: ({ ref }: { ref: string; }) => {
      return freezeCard(ref);
    },
    onSuccess() {
      toast.success("Card frozen");
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });
  return { freezeCardFn: mutateAsync, freezeLoading: isPending };
};
export const useUnfreezeCard = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["unfreezeCard"],
    mutationFn: ({ ref }: { ref: string; }) => {
      return unfreezeCard(ref);
    },
    onSuccess() {
      toast.success("Card unfrozen");
      queryClient.invalidateQueries({ queryKey: ["cards"] });
    },
  });
  return { unfreezeCardFn: mutateAsync, unfreezeLoading: isPending };
};
