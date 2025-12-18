import { LuCreditCard, LuSend } from "react-icons/lu"

type Props = {
 type:"approved"|"pending"|"declined",
 value:number|string
}
export const CardRequestsCard = ({type,value}: Props) => {
    const chooseIcon=()=>{
        switch (type) {
            case "approved":
                return <LuSend className="w-20 text-[#2FBE22] h-8"/>
                
             
            case "pending":
                return <LuCreditCard className="w-20 text-[#F9CB38] h-8"/>
                
             
            case "declined":
                return "/send.png"
                
             
        
            default:
                break;
        }
    }
    const chooseColor=()=>{
        switch (type) {
            case "approved":
                return "text-[#2FBE22]"
                
             
            case "pending":
                return "text-[#F9CB38]"
                
             
            case "declined":
                return "text-red-600"
                
             
        
            default:
                break;
        }
    }
    return ( 
        <div className="bg-[#FFFFFFCC] border rounded-[30px] border-gray-300 ">
            <div className="space-y-6 text-center py-[22px] px-[73px]">
                {chooseIcon()}
                <p className={` uppercase ${chooseColor()} font-semibold`}>
                    {type}
                </p>
                <p>{value}</p>
            </div>
        </div>
    );
}