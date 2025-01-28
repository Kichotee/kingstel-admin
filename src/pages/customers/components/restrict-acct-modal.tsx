/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Button } from "@chakra-ui/react";


export const RestrictModal = () => {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Switch
          variant="raised"
        //   onChange={() => {
        //     setsearchParams({ action: "restrict" });
        //   }}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogBody>
          <p className="text-white py-4">
          Restricting this account will limit the users ability to perform actions on the account
          </p>
        </DialogBody>
        <DialogFooter className="text-whit *:border-black *:border *:p-2">
          <DialogActionTrigger asChild>
            <Button variant="outline" borderColor={"#000"}>
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button
            variant={"solid"}
            bgColor={"#EC1C24"}
            rounded={"2xl"}
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
