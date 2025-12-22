/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import instance from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { IFee } from "@/types";

export type ExchangeRate = {
  to_currency: string;
  from_currency: string;
  charge: string;
};

type ChargesFilters = {
  is_active?: boolean;
  search?: string;
  page?: number;
  limit?: number;
};

type CreateChargePayload = Omit<IFee, 'id' | 'created_at' | 'updated_at'>;
type UpdateChargePayload = Partial<CreateChargePayload>;

// ============ API FUNCTIONS ============

const getFees = async () => {
  try {
    const result = await instance.get("/admin/charges");
    return result?.data?.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

const getAllCharges = async (filters?: ChargesFilters) => {
  try {
    const params = new URLSearchParams();
    if (filters?.is_active !== undefined) params.append('is_active', String(filters.is_active));
    if (filters?.search) params.append('search', filters.search);
    if (filters?.page) params.append('page', String(filters.page));
    if (filters?.limit) params.append('limit', String(filters.limit));

    const result = await instance.get(`/admin/charges?${params.toString()}`);
    return result?.data?.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

const getSingleCharge = async (id: number) => {
  try {
    const result = await instance.get<{data: IFee}>(`/admin/charges/${id}`);
    return result?.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

const createCharge = async (data: CreateChargePayload) => {
  try {
    const res = await instance.post("/admin/charges", data);
    return res.data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

const updateCharge = async (id: string, data: UpdateChargePayload) => {
  try {
    const res = await instance.put(`/admin/charges/${id}`, data);
    return res?.data?.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

const deleteCharge = async (id: string) => {
  try {
    const res = await instance.delete(`/admin/charges/${id}`);
    return res?.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

const toggleChargeStatus = async (id: string) => {
  try {
    const res = await instance.patch(`/admin/charges/${id}/toggle-status`);
    return res?.data?.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
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



// ============ TANSTACK QUERY HOOKS ============

export const useGetFees = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getFees();
    },
    queryKey: ["charges"],
  });
  return { feesData: data, isLoading };
};

export const useGetAllCharges = (filters?: ChargesFilters) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getAllCharges(filters),
    queryKey: ["charges", filters],
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  return { charges: data, isLoading, error };
};

export const useGetSingleCharge = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getSingleCharge(id),
    queryKey: ["charge", id],
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
  return { charge: data?.data, singleChargeLoading:isLoading, error };
};

export const useCreateCharge = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation({
    mutationFn: createCharge,
    onSuccess: (data) => {
      toast.success("Charge created successfully");
      queryClient.invalidateQueries({ queryKey: ["charges"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to create charge");
    },
  });
  return { createChargeFn: mutateAsync, isPending, isError, error };
};

export const useUpdateCharge = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateChargePayload }) =>
      updateCharge(id, data),
    onSuccess: (data) => {
      toast.success("Charge updated successfully");
      queryClient.invalidateQueries({ queryKey: ["charges"] });
      queryClient.invalidateQueries({ queryKey: ["charge"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to update charge");
    },
  });
  return { updateChargeFn: mutateAsync, isPending, isError, error };
};

export const useDeleteCharge = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation({
    mutationFn: deleteCharge,
    onSuccess: (data) => {
      toast.success("Charge deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["charges"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to delete charge");
    },
  });
  return { deleteChargeFn: mutateAsync, isPending, isError, error };
};

export const useToggleChargeStatus = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError, error } = useMutation({
    mutationFn: toggleChargeStatus,
    onSuccess: (data) => {
      toast.success("Charge status updated successfully");
      queryClient.invalidateQueries({ queryKey: ["charges"] });
      queryClient.invalidateQueries({ queryKey: ["charge"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to toggle charge status");
    },
  });
  return { toggleStatusFn: mutateAsync, isPending, isError, error };
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
