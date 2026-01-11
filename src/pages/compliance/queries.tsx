/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { ComplianceDocument } from "./types";

const getAllKYC = async () => {
  try {
    const result = await instance.get<{data:{data: ComplianceDocument[]}}>("/admin/kyc");
    return result?.data?.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
const getSingleDocument = async (id:number|string) => {
  try {
    const result = await instance.get<{data: ComplianceDocument}>(`/admin/kyc/${id}`);
    return result?.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
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