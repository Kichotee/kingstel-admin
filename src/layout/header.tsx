
import { LuMoon } from "react-icons/lu";


const Header = () => {
 

  return (
    <header className="sticky z-10 top-0 bg-white h-[90px] base-theme-container flex items-center border-b border-gray-200 justify-between md:px-7 px-5">
      {/* left side */}
      <div className=" w-full flex gap-4 justify-between items-center">
        <div className="flex items-center gap-[77px]">
       <img src="/logo.png" className="w-[122px] h-[32.5px]" alt="" />
          <p className="common-sub-text">Welcome</p>
        </div>
      {/* right side */}
        <div className="flex justify-self-end  gap-3.5">
          <div className="flex items-center gap-5">
            {/* <RatePopOver /> */}
            <LuMoon/>
          </div>

          {/* <UserAccountPopover/> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
