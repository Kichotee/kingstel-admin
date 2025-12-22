// import {} from "@chakra-ui/react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const UserPopover = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="bg-gray-600 border-black rounded-full"
          >
            K
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 border border-[#D1DFFE80] bg-white shadow-none">
          <div className="space-y-[49px] w-full">
            <div className="flex flex-col gap-9 w-full items-center">
              <div className="flex flex-col w-full gap-5 items-center">
                
               
              </div>
              <Link
                to={"/dashboard/settings/profile"}
                className="bg-[#D1DFFE40] p-[10px_5px] w-full flex gap-2 items-center"
              >
                <img src="/user.png" alt="" />
                <div className="flex flex-col text-xs gap-[5px]">
                  <p className="font-medium">My Profile</p>
                  <p className="font-normal">Account settings</p>
                </div>
              </Link>
            </div>
            <div className="flex justify-center mx-auto">
              <Link
                to={"/login"}
                className="w-full"
              >
                <button
                  className="bg-[#EC1C24] hover:bg-[#EC1C24]/90 text-white px-[58.34px] py-[8.34px] rounded-[16px] flex gap-2 items-center justify-center w-full"
                >
                  <LuLogOut /> <p>Logout</p>
                </button>
              </Link>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserPopover;
