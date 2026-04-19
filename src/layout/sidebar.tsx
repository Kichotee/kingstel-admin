
import SidebarLink, { ILink } from "./sidebarLink";
import { DASHBOARD_SIDEBAR_LINKS } from "./sidebarData";
import { Link, useLocation } from "react-router-dom";

type SidebarNavProps = {
  isMobile?: boolean;
  onNavigate?: () => void;
};

export const SidebarNav = ({ isMobile = false, onNavigate }: SidebarNavProps) => {
  const { pathname } = useLocation();

  if (!isMobile) {
    return (
      <div className="py-[30px] flex flex-1 flex-col gap-2.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => {
          if (link.visible) {
            return <SidebarLink key={link.key} link={link as ILink} />;
          }

          return null;
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-2 px-1 pt-6">
      {DASHBOARD_SIDEBAR_LINKS.filter((link) => link.visible).map((link) => {
        const isActive = pathname === link.path || pathname.includes(link.key);

        return (
          <div key={link.key} className="flex flex-col gap-2">
            <Link
              to={link.path}
              onClick={onNavigate}
              className={`flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#D1DFFE] text-brand-primary"
                  : "text-[#4B5563] hover:bg-[#F3F6FF]"
              }`}
            >
              <span className="text-base">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
            {link.links?.length ? (
              <div className="ml-11 flex flex-col gap-2 pb-2">
                {link.links.map((childLink) => {
                  const isChildActive = pathname === childLink.path;

                  return (
                    <Link
                      key={childLink.key}
                      to={childLink.path}
                      onClick={onNavigate}
                      className={`text-sm transition-colors ${
                        isChildActive
                          ? "text-brand-primary"
                          : "text-[#6B7280] hover:text-brand-primary"
                      }`}
                    >
                      {childLink.label}
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

const Sidebar = () => {
  // const user= Auth.getUserObj()

  
  return (
    <aside className="sticky top-0 bg-[#FFFFFF]  h-[100vh] hidden w-[80px] px-[5px] sm:flex flex-col max-h-max   lg:w-[186px] items-start transition-all duration-300">

      <SidebarNav />
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
