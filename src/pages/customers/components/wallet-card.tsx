import React from "react";

type Props = {
 amount?:number|string;
 currency?:string;
 flag?:React.ReactNode

}

export const WalletCard = ({amount, currency,flag}: Props) => {
   
    return ( 
        <div className="bg-white rounded-[20px] p-[25px_62px] border min-w-[273px] border-neutral-offBlue flex items-center justify-center gap-[5px]">
            <p className="flex gap-1 text-[18px] leading-[1.6875em] items-center font-semibold">
                <p>{currency}</p>
                <p className="">{amount || 0}</p>
            </p>
            <div className="">{flag}</div>

        </div>
    );
}