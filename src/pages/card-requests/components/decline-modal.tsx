import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DeclineModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reference: string;
  isPending: boolean;
  onConfirm: (ref: string) => Promise<void>;
}

export const DeclineModal = ({
  open,
  onOpenChange,
  reference,
  isPending,
  onConfirm,
}: DeclineModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Unfreeze Request</DialogTitle>
          <DialogDescription>
            Are you sure you want to unfreeze this card request?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex gap-3 justify-end">
          <Button
            variant="outline"
            onClick={() => {
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>
          <Button
            loading={isPending}
            onClick={() => onConfirm(reference)}
            className=""
          >
            Unfreeze
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
