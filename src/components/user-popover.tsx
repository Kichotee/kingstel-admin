// import {} from "@chakra-ui/react";
import { IconButton, Input, Text } from "@chakra-ui/react";
import { Button } from "./ui/button";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "./ui/popover";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const UserPopover = () => {
  return (
    <div className="">
      <PopoverRoot>
        <PopoverTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            bgColor={"gray.600"}
            borderColor={"black"}
            rounded={"full"}
          >
            K
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg={"white"}
          color={"black"}
          shadow={"none"}
          border={"solid"}
          borderWidth={1}
          borderColor={"#D1DFFE80"}
        >
          <PopoverArrow />
          <PopoverBody className="space-y-[49px] w-full px-0">
            <div className="flex-col flex gap-9 w-full items-center">
              <div className="flex flex-col w-full gap-5 items-center">
                <img src="/default-user.png" className="max-w-[60px]" alt="" />
                <div className="flex-flex-col text-xs gap-2.5 text-center">
                  <h2 className="font-semibold">Kingstel</h2>
                  <p className="italic">{}</p>
                </div>
              </div>
              <Link to={"/dashboard/settings/profile"} className="bg-[#D1DFFE40] p-[10px_5px] w-full flex gap-2 items-center">
                <img src="/user.png" alt="" />
                <div className="flex flex-col text-xs gap-[5px]">
                  <p className="font-medium">My Profile</p>
                  <p className="font-normal">Account settings</p>
                </div>
              </Link>
            </div>
            <div className="mx-auto flex justify-center">
              <IconButton
                display={"flex"}
                gap={"2"}
                mx={"auto"}
                w={"max"}
                bg={"#EC1C24"}
                px={"58.34px"}
                py={"8.34px"}
                color={"white"}
                rounded={"16px"}
              >
                <LuLogOut /> <p>Logout</p>
              </IconButton>
            </div>

            {/* <Text my="4">
              Naruto is a Japanese manga series written and illustrated by
              Masashi Kishimoto.
            </Text>
            <Input placeholder="Your fav. character" size="sm" /> */}
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </div>
  );
};

export default UserPopover;
