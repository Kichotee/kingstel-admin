import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogRoot,
  DialogTrigger,
} from "@/components/ui/dialog";

export const AcceptModal = () => {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Button variant="outline" _hover={{
            bgColor:"gray.50"
        }}  size={"lg"}>
          Accept
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogBody>
          <p className="text-black py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </DialogBody>
        <DialogFooter className="text-black *:border-black *:border *:p-2">
          <DialogActionTrigger asChild>
            <Button variant="outline" borderColor={"#000"}>Cancel</Button>
          </DialogActionTrigger>
          <Button variant={"solid"} bgColor={"#0f00fd"} border={"none"} color={"white"}>Accept </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};
