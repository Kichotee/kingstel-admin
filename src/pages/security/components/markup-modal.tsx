import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MarkupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (percentage: string) => Promise<void>;
  isPending?: boolean;
  rate?: string;
}

export const MarkupModal = ({
  open,
  onOpenChange,
  onConfirm,
  isPending = false,
}: MarkupModalProps) => {
  const [percentage, setPercentage] = useState("");

  const handleUpdate = async () => {
    await onConfirm(percentage);
    setPercentage("");
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setPercentage("");
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Update Markup</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Input
            placeholder="Markup percentage"
            type="number"
            step="0.01"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="w-full"
          />
        </div>
        <DialogFooter className="flex gap-3 justify-end">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            loading={isPending}
            onClick={handleUpdate}
            className="bg-brand-primary hover:bg-brand-primary/90"
          >
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
