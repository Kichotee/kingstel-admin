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
import CircularProgress from "@/shared/CircularProgress";
// import { useSearchParams } from "react-router-dom";

export const RestrictModal = ({blocked, id}:{
  blocked: boolean;
  id:number
}) => {
  const { restrictFn, isPending } = useRestrictUser();
  // const [searchParams] = useSearchParams();

  return (
    <Dialog>
      <DialogTrigger asChild>
       <Button className={`${blocked ? "bg-red-600":" bg-brand-primary"}`}>
        {isPending ? <CircularProgress color="white"/> : blocked ? "Activate Account" : "Restrict Account"}
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
            className={`" ${blocked ? "bg-red-600 !text-white":" bg-brand-primary"} !text-white hover:bg-brand-primary/80 duration-200 text-white"`}
          >
            {isPending ? <CircularProgress color="white"/>: blocked ? "Activate Account" : "Restrict Account"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


