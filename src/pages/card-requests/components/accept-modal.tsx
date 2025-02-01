import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogRoot,
  DialogTrigger,
} from "@/components/ui/dialog";

type IProps = {
  acceptFn: ({ref, status}:{ ref: string, status: boolean }) => void;
  reference: string;
  isPending: boolean;
};

export const AcceptModal = ({ acceptFn, reference, isPending }: IProps) => {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Button
          variant="outline"
          _hover={{
            bgColor: "gray.50",
          }}
          size={"lg"}
        >
          Accept
        </Button>
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
            Are you sure you want to accept this request?
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
              py={"5px"}
              px={"10px"}
              rounded="5px"
            >
              No, Cancel
            </Button>
          </DialogActionTrigger>
          <Button
            variant={"solid"}
            loading={isPending}
            bgColor={"#1A8010"}
            rounded={"5px"}
            py={"5px"}
            px={"10px"}
            onClick={() => acceptFn({ ref: reference, status: true })}
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
