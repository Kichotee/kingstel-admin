// import classNames from "classnames";
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, LinkProps } from "react-router-dom";

// import { IRoleObject } from "@/utils/constants";

type ModifiedLinkProps = {
  isActive?: boolean;
  isChildren?: boolean;
} & LinkProps;

const StyledLink = styled(Link)<ModifiedLinkProps>`
  display: flex;
  height: 42px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  justify-content: flex-start;
  align-items: center;
  width: 173px;
  &:before {
    content: ".";
    position: "absolute";

    left: 0;
    top: 0;
    height: 42px;
    background-color: #d1dffe;
    display: ${(prop) => {
      return prop.isActive ? "block" : "none";
    }};
  }
`;

type ILink = {
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  allowedRoles: boolean;
  links?: [
    {
      key: string;
      label: string;
      path: string;
    }
  ];
};
type ISidebarProps = {
  link?: ILink;
};

function SidebarLink({ link }: ISidebarProps) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState("");

  // console.log(link.allowedRoles);
  return (
    <>
      {link?.links ? (
        <div className="">
          <StyledLink
            to={link.path}
            className={` ${
              pathname.includes(link.key)
                ? " rounded-[10px] bg-[#D1DFFE] text-brand-primary text-success"
                : `text-[#A5ADC0] hover:text-white rounded-[10px] hover:bg-brand-primary/80`
            }    flex items-center gap-2.5  text-xs duration-200  leading-[150%] font-[500]`}
            onClick={() =>
              setOpen((prev) => {
                return prev == link.path ? "" : link.path;
              })
            }
          >
            <span className="">{link.icon}</span>
            <span className="hidden  lg:flex">{link.label}</span>
          </StyledLink>
          {open == link.path && (
            <ul className="">
              {link.links.map((data) => {
                return (
                  <li className=" list-inside list-disc ml-2  text-[#A5ADC0] ">
                    <Link
                      to={data.path}
                      className={`text-[#A5ADC0] w-[148px]  text-xs rounded-[10px] hover:underline ${pathname.includes(data.path) ? "text-brand-primary" : ""}`}
                    >
                      {data.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ) : (
        <StyledLink
          to={link.path}
          className={` ${
            pathname === link.path
              ? " rounded-[10px] bg-[#D1DFFE] text-brand-primary"
              : `text-[#A5ADC0] hover:text-white rounded-[10px]  hover:bg-brand-primary/80`
          }    flex items-center gap-2.5  text-xs duration-200   text-[14px] leading-[150%] font-[500]`}
        >
          <span className="">{link.icon}</span>
          <span className="hidden  lg:flex">{link.label}</span>
        </StyledLink>
      )}
    </>
  );
}

export default SidebarLink;
