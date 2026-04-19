/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ComplianceDocument } from "./types";

const getApiErrorMessage = async (error: any) => {
  const responseData = error?.response?.data;

  if (responseData instanceof Blob) {
    try {
      const parsedData = JSON.parse(await responseData.text());
      return parsedData?.message || error.message || "Request failed";
    } catch {
      return error.message || "Request failed";
    }
  }

  return responseData?.message || error.message || "Request failed";
};

const getAllKYC = async () => {
  try {
    const result = await instance.get<{data:{data: ComplianceDocument[]}}>("/admin/kyc");
    return result?.data?.data;
  } catch (error: any) {
    throw new Error(await getApiErrorMessage(error));
  }
};
const getSingleDocument = async (id:number|string) => {
  try {
    const result = await instance.get<{data: ComplianceDocument}>(`/admin/kyc/${id}`);
    return result?.data;
  } catch (error: any) {
    throw new Error(await getApiErrorMessage(error));
  }
};

const getDocumentResource = async (id: number | string) => {
  try {
    const result = await instance.get<Blob>(`/admin/kyc/${id}/resource`, {
      responseType: "blob",
    });
    return result.data;
  } catch (error: any) {
    throw new Error(await getApiErrorMessage(error));
  }
};


export const useGetDocuments = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getAllKYC();
    },
    queryKey: ["documents"],
  });
  return { documents: data, isLoading };
};


export const useGetSingleDocument = (id:string|number) => {
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return getSingleDocument(id);
    },
    queryKey: ["single-document", id],
    enabled:!!id
  });
  return { document: data, isLoading };
};

export const useGetDocumentResource = (id: string | number) => {
  const { mutateAsync, isPending, data } = useMutation({
    mutationFn: (resourceId?: string | number) => {
      return getDocumentResource(resourceId ?? id);
    },
  });

  return { getDocumentResource: mutateAsync, isLoading: isPending, resource: data };
};