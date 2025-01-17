import instance from "@/lib/api"
import { SingleResponseData } from "@/lib/api/type";
import { ICreateUser, ICustomers } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const createUser = async (body:ICreateUser) => {
    try {
        const response = await instance.post<SingleResponseData<ICustomers>>('/admin/login', {
           body
        })
        return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        throw new Error(error);
        
    }
}

export const useCreateUser=()=>{
    const navigate= useNavigate()
    const {mutateAsync, isPending}= useMutation({
        mutationFn:(body:ICreateUser)=>{
            return createUser(body)
        },
        onSuccess() {
            navigate('/dashboard/home')
        },
        
    });
    return {login:mutateAsync, isPending}
}