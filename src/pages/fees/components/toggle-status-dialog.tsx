import { Button } from "@/components/ui/button";
import { IFee } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ToggleStatusDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  charge: IFee | null;
  onConfirm: () => Promise<void>;
  isPending: boolean;
}

export const ToggleStatusDialog = ({
  open,
  onOpenChange,
  charge,
  onConfirm,
  isPending,
}: ToggleStatusDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {charge?.is_active ? "Deactivate" : "Activate"} Charge
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to{" "}
            {charge?.is_active ? "deactivate" : "activate"} "
            {charge?.name}"?
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
            onClick={onConfirm}
            className="bg-brand-primary hover:bg-brand-primary/90"
          >
            {charge?.is_active ? "Deactivate" : "Activate"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
