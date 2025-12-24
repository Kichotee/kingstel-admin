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
import { useRestrictUser } from "../queries";
// import { useSearchParams } from "react-router-dom";

export const RestrictModal = ({blocked, id}:{
  blocked: boolean;
  id:number
}) => {
  const { restrictFn } = useRestrictUser();
  // const [searchParams] = useSearchParams();

  return (
    <Dialog>
      <DialogTrigger asChild>
       <Button className=" bg-brand-primary">
        {blocked ? "Unrestrict Account" : "Restrict Account"}
       </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">Restrict Account</DialogTitle>
          <DialogDescription className="text-center text-black py-4  mx-auto">
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
                ref: id,
                status: blocked ? `unblock` : `block`,
              })
            }
            className=" bg-brand-primary hover:bg-brand-primary/80 duration-200 text-white"
          >
            {blocked ? "Unrestrict" : "Restrict"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


