type Props = {
 type:"approved"|"pending"|"declined",
 value:number|string
}
export const CardRequestsCard = ({type,value}: Props) => {
    const chooseIcon=()=>{
        switch (type) {
            case "approved":
                return "/send.png"
                
             
            case "pending":
                return "/pending.png"
                
             
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
        <div className="bg-[#FFFFFFCC] border rounded-[30px] border-[#D1DFFE80] shadow-[4px_4px_10px_1.4px_#D1DFFE80]">
            <div className="space-y-6 text-center py-[22px] px-[73px]">
                <img src={chooseIcon()} alt="" />
                <p className={` uppercase ${chooseColor()} font-semibold`}>
                    {type}
                </p>
                <p>{value}</p>
            </div>
        </div>
    );
}