import { useState } from "react";
import { Dialog, Input, Button, Stack, Portal } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
// import { toaster } from "@/components/ui/toaster";

interface MarkupModalProps {
  onUpdate: (percentage: string) => void;
  // onEdit: (percentage: string) => void;
}

export const MarkupModal = ({
  onUpdate,
}: // onEdit,
MarkupModalProps) => {
  const [percentage, setPercentage] = useState("");

  const handleUpdate = async () => {
    await onUpdate(percentage);
    setPercentage("");
  };

  const handleCancel = () => {
    setPercentage("");
  };

  return (
    <Dialog.Root size={`md`}>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm" px={2} fontSize="sm">
          Update Markup
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content className="bg-white rounded-md shadow-lg p-2 w-full max-w-md">
            <Dialog.Header>
              <Dialog.Title>Update Markup</Dialog.Title>
            </Dialog.Header>
            <Dialog.CloseTrigger />
            <Dialog.Body>
              <Stack gap={4}>
                <Input
                  placeholder="Markup percentage"
                  className="border"
                  color={percentage ? "black" : "gray"}
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  type="text"
                  step="0.01"
                />
              </Stack>
            </Dialog.Body>
            <Dialog.Footer gap={3}>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>

              <Button
                onClick={handleUpdate}
                bg="#0F00BD"
                color="white"
                px={4}
                py={2}
              >
                Update
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
