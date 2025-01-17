import React from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import LogoIcon from "@/shared/icons/logo copy";

type Props = {
  frozenCard?: boolean;
};
export const CardBox = ({ frozenCard = false }: Props) => {
  const [viewPassword, setViewPassword] = React.useState(false);

  return (
    <div className="bg-gradient-to-br  from-[#D1DFFE] to-[#0F00BD]  overflow-hidden rounded-[20px] relative w-[355px] h-[217px]">
      <div
        className={`absolute  pt-[7px]  top-0 left-0 w-full h-full px-[15px] ${
          frozenCard ? "bg-[url(/frost.png)]" : "bg-[url('/virtual-card.png')]"
        }`}
      >
        <div className="flex justify-between items-center">
          <img src="/chip.png" alt="" />
          <LogoIcon />
        </div>
        <div className="flex flex-col items-center gap-2.5 ">
          <div className="flex gap-2.5 p-2.5 font-semibold text-[30px] leading-[45px] justify-center">
            <p>$</p> <p> {viewPassword ? "*** " : "5.00"}</p>
            <button
              className="transition-all duration-200"
              onClick={() => {
                setViewPassword((prev) => {
                  return !prev;
                });
              }}
            >
              {!viewPassword ? <LuEye className="w-4" /> : <LuEyeOff className="w-4" />}
            </button>
          </div>
          <div className="flex gap-4 text-xl text-[20px]  font-semibold">
            <input
              type="text"
              value={1234}
              className="border-none hover:border-none focus:border-none w-[50px] h-[30px] bg-transparent outline-none focus:outline-none "
            />
            <input
              type={`${viewPassword ? "password" : "text"}`}
              value={1234}
              className="border-none hover:border-none animate-fade-in-grow focus:border-none w-[50px] h-[30px] bg-transparent outline-none focus:outline-none "
            />
            <input
              type={`${viewPassword ? "password" : "text"}`}
              value={1234}
              className="border-none hover:border-none animate-fade-in-grow focus:border-none w-[50px] h-[30px] bg-transparent outline-none focus:outline-none "
            />
            <input
              type="text"
              value={5678}
              className="border-none hover:border-none focus:border-none w-[50px] h-[30px] bg-transparent outline-none focus:outline-none "
            />
          </div>
        </div>
        <div className="flex text-sm items-center gap-[50px] font-medium">
          <p className="whitespace-nowrap">John Doe</p>
          <p>933</p>
          <p className="flex flex-col items-center">
            <span className="text-[8px] font-semibold uppercase">Valid thru</span>
            <p>09/24</p>
          </p>

          <div className="">
            <img src="/chip.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
