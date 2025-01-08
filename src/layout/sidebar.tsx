
import SidebarLink from "./sidebarLink";
import { DASHBOARD_SIDEBAR_LINKS } from "./sidebarData";


const Sidebar = () => {
  // const user= Auth.getUserObj()

  
  return (
    <aside className="sticky top-0 bg-[#FFFFFF] border h-[calc(100vh-80px)] hidden w-[80px] px-[5px] sm:flex flex-col   lg:w-[186px] items-start transition-all duration-300">

      <div className="py-[30px] flex flex-1 flex-col gap-2.5  ">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => {
          if (link.visible ) {
            console.log(link)
            return <SidebarLink key={link.key} link={link} />;
          }
          
          return <></>;
        })}
      </div>
      {/* <div className="flex flex-col gap-1.5 pt-2 ">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} />
          ))}
          <div
            className={classNames(linkClass, "cursor-pointer text-red-500 hIAIln")}
            // onClick={() => handleLogout()}
            onClick={() => {
              removeToken(navigate);
            }}
          >
            <span className="text-[40px]">
              <LogOutIcon />
            </span>
            <span className="hidden lg:flex">Logout</span>
          </div>
        </div> */}
    </aside>
  );
};

export default Sidebar;
