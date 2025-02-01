/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useRestrictUser } from "../queries";
import { useSearchParams } from "react-router-dom";


export const RestrictModal = () => {

  const {restrictFn}= useRestrictUser()
  const [searchParams]= useSearchParams()
  return (
    <DialogRoot>
      <DialogTrigger>
        <Switch
        value={1}
          variant="raised"
          //   onChange={() => {
          //     setsearchParams({ action: "restrict" });
          //   }}
        />
      </DialogTrigger>
      <DialogContent
        width={"276px"}
        shadow={"sm"}
        rounded={"lg"}
        overflow={"hidden"}
        bg={"white"}
      >
        <DialogBody bg={"inherit"}>
          <p className="text-black mx-auto py-4 text-center max-w-[186px]">
            Restricting this account will limit the users ability to perform
            actions on the account
          </p>
        </DialogBody>
        <DialogFooter
          bg={"inherit"}
          className="text-black *:tect-white flex justify-center *:border-black *:border  space-x-3"
        >
          <DialogActionTrigger asChild>
            <Button
              variant="solid"
              bgColor={"#FF4F56"}
              border={"none"}
              color={"white"}
              py={"5px"}
              px={"10px"}
              rounded="5px"
            >
              No, Cancel
            </Button>
          </DialogActionTrigger>
          <Button
            variant={"solid"}
            loading={false}
            bgColor={"#1A8010"}
            rounded={"5px"}
            py={"5px"}
            px={"10px"}
            onClick={() => restrictFn({ ref: searchParams.get("email") as string, status: true })}
            border={"none"}
            color={"white"}
          >
            Accept{" "}
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};


