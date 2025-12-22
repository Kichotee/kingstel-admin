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

type IProps = {
  acceptFn: ({ ref }: { ref: string; }) => void;
  reference: string;
  isPending: boolean;
};

export const DeclineModal = ({ acceptFn, reference, isPending }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost"  className=" hover:bg-transparent">
          Unfreeze
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[276px]">
        <DialogHeader>
          <DialogTitle className="sr-only">Confirm Decline</DialogTitle>
          <DialogDescription className="text-center text-black py-4 max-w-[186px] mx-auto">
            Are you sure you want to unfreeze this card request?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center gap-3 pt-4">
          <DialogTrigger >
            <Button variant="outline" size="sm">
              No, Cancel
            </Button>
          </DialogTrigger>
          <Button
            variant="default"
            size="sm"
            loading={isPending}
            onClick={() => acceptFn({ ref: reference })}
            className="bg-green-600 hover:bg-green-300 duration-200"
          >
            Unfreeze
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
