/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useRestrictUser } from "../queries";
import { useSearchParams } from "react-router-dom";

export const RestrictModal = ({blocked}:{
  blocked: boolean;
}) => {
  const { restrictFn } = useRestrictUser();
  const [searchParams] = useSearchParams();

  return (
    <Dialog>
      <DialogTrigger asChild>
       <Button className=" bg-brand-primary">
        {blocked ? "Unrestrict Account" : "Restrict Account"}
       </Button>
      </DialogTrigger>
      <DialogContent className="w-[276px]">
        <DialogHeader>
          <DialogTitle className="sr-only">Restrict Account</DialogTitle>
          <DialogDescription className="text-center text-black py-4 max-w-[186px] mx-auto">
            Restricting this account will limit the users ability to perform
            actions on the account
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center gap-3">
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              No, Cancel
            </Button>
          </DialogTrigger>
          <Button
            variant="default"
            size="sm"
            onClick={() =>
              restrictFn({
                ref: searchParams.get("email") as string,
                status: true,
              })
            }
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


