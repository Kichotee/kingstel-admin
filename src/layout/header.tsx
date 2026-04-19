import UserPopover from "@/components/user-popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarNav } from "./sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";


const Header = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <header className="sticky z-10 top-0 bg-white text-neutral-black h-[90px] base-theme-container flex items-center border-b border-gray-200 justify-between md:px-7 px-5">
      {/* left side */}
      <div className=" w-full flex gap-4 justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-[77px]">
          <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="flex sm:hidden rounded-full border-[#D1DFFE]"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[86%] max-w-[320px] border-r bg-white px-4 py-6">
              <SheetHeader className="border-b border-[#E5E7EB] pb-4 text-left">
                <SheetTitle className="text-base font-semibold text-neutral-black">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <SidebarNav
                isMobile
                onNavigate={() => {
                  setIsMobileSidebarOpen(false);
                }}
              />
            </SheetContent>
          </Sheet>
          <img src="/logo.png" className="w-[122px] h-[32.5px]" alt="" />
          <p className="common-sub-text hidden md:block">Welcome Kingstel</p>
        </div>
        {/* right side */}
        <div className="flex w-max items-center gap-2 sm:gap-3.5">
          <div className="flex items-center gap-5">{/* <RatePopOver /> */}</div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9723 17.491C16.7281 16.3283 18.0202 14.5862 18.6233 12.5686C19.2264 10.5509 19.1023 8.38556 18.2727 6.45C17.443 4.51444 15.9604 2.93142 14.0833 1.97689C12.2061 1.02236 10.0535 0.756853 8.00074 1.22666M14.9723 17.491V13.9937M14.9723 17.491H18.4926M5.00308 2.51865C3.25334 3.68565 1.96798 5.429 1.37051 7.44555C0.773032 9.4621 0.901243 11.6243 1.73284 13.5561C2.56444 15.4879 4.04683 17.0671 5.92221 18.0192C7.7976 18.9712 9.94734 19.2358 11.9976 18.767M5.00308 2.51865V5.99994M5.00308 2.51865H1.5058"
              stroke="black"
              stroke-width="1.19906"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

       
        <UserPopover/>
        </div>
      </div>
    </header>
  );
};

export default Header;
