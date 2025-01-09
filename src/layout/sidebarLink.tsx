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
  link: ILink;
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
            to={""}
            className={` ${
              pathname === link.path
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
            <ul>
              {link.links.map((data) => {
                return <li className="list-disc list-inside text-[#A5ADC0] ">
                  <StyledLink to={data.path}>

                  <span className="text-xs font-medium text-[#A5ADC0]">{data.label}</span>
                  </StyledLink>
                  </li>;
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
