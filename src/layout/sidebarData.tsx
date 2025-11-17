import React from "react";
import { FaCreditCard, FaHouse } from "react-icons/fa6";
import { LuReceipt, LuRefreshCcw, LuSend, LuWallet } from "react-icons/lu";
import { PiUser } from "react-icons/pi";



export type Link={
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  allowedRoles: boolean;
  visible?: boolean;
  links?: {
    key: string;
    label: string;
    path: string;
  }
}
type SidebarLink = Array<{
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  allowedRoles: boolean;
  visible?: boolean;
  links?: {
    key: string;
    label: string;
    path: string;
  }[ ];
}>;

export const DASHBOARD_SIDEBAR_LINKS: SidebarLink = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard/home",
    icon: <FaHouse size={18} />,
    allowedRoles: true,
    visible: true,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/dashboard/customers",
    icon: <LuWallet size={18} />,
    allowedRoles: true,
    visible: true,
  },

  {
    key: "transactions",
    label: "Transactions",
    path: "/dashboard/transactions",
    icon: <LuSend size={18} />,
    allowedRoles: true,
    visible: true,
  },

  {
    key: "Card request",
    label: "Card Request",
    path: "/dashboard/card-requests",
    icon: <LuReceipt size={18} />,
    allowedRoles: true,
    visible: true,
  },
  // {
  //   key: "currency",
  //   label: "Manage Currency",
  //   path: "/dashboard/currency/manage-currency",
  //   links:[
  //     {
  //       key: "currencies",
  //       label: "Currencies",
  //       path: "/dashboard/currency/manage-currency",
  //     },
  //     {
  //       key: "configure-currencies",
  //       label: "Configure currency",
  //       path: "/dashboard/currency/edit-currency",
  //     },
  //   ],
  //   icon: <LuRefreshCcw size={18} />,
  //   allowedRoles: true,
  //   visible: true,
  // },
  {
    key: "manage-users",
    label: "Manage users",
    path: "/dashboard/manage-users",
    icon: <PiUser size={18} />,
    allowedRoles: true,
    visible: true,
    links: [
      {
        key: "users",
        label: "Create Admin account",
        path: "/dashboard/manage-users",
      },
    
     
    ],
  },
  // {
  //   key: "transfers",
  //   label: "Manage transfers",
  //   path: "/dashboard/transfers/manage-transfers",
  //   icon: <FaCreditCard size={18} />,
  //   links:[
  //     {
  //       key: "pending",
  //       label: "Pending Transfers",
  //       path: "/dashboard/transfers/manage-transfers?status=pending",
  //     },
  //     {
  //       key: "completed",
  //       label: "Completed transfers",
  //       path: "/dashboard/transfers/manage-transfers?status=completed",
  //     },
  //   ],
  //   allowedRoles: true,
  //   visible: true,
  // },
  {
    key: "compliance",
    label: "Compliance",
    path: "/dashboard/compliance",
    icon: <LuReceipt size={18} />,
    allowedRoles: true,
    visible: true,
  },
  {
    key: "Rates",
    label: "Rates",
    path: "/dashboard/manage-charge",
    icon: <LuRefreshCcw size={18} />,
    allowedRoles: true,
    visible: true,
  },
  // {
  //   key: "calender",
  //   label: "Calendar and Events",
  //   path:"/",
  //   icon: <FaAppleWhole />,
  //   true,
  //   visible: false,
  // },
  // {
  //   key: "payroll",
  //   label: "Payroll Management",
  //   path:"/",
  //   icon: <FaAppleWhole />,
  //   allowedRoles: user?.is_verified,
  //   visible: true,
  // },
  // {
  //   key: "loan",
  //   label: "Loan Management",
  //   path:"/",
  //   icon: <FaAppleWhole />,
  //   allowedRoles: user?.is_verified,
  //   visible: true,
  // },
  // {
  //   key: "leave",
  //   label: "Leave Management",
  //   path:"/",
  //   icon: <FaAppleWhole />,
  //   allowedRoles: user?.is_verified,
  //   visible: true,
  // },
  // {
  //   key: "redeployment",
  //   label: "Redeployment",
  //   path:"/",
  //   icon: <FaAppleWhole />,
  //   allowedRoles: user?.is_verified,
  //   visible: true,
  // },
  // {
  //   key: "talents",
  //   label: "Talent Management",
  //   path:"/",
  //   icon: <FaAppleWhole />,
  //   allowedRoles: user?.is_verified,
  //   // visible: true,
  // },
  // {
  //   key: "recriutment",
  //   label: "Recruitment",
  //   path:"/",
  //   icon: <FaAppleWhole />,
  //   allowedRoles: user?.is_verified,
  //   // visible: true,
  // },
  // {
  //   key: "learning_development",
  //   label: "Learning & Development",
  //   path:"/",
  //   icon: <FaAppleWhole />,
  //   allowedRoles: user?.is_verified,
  //   // visible: true,
  // },
  // {
  //   key: "appraisal",
  //   label: "Appraisals",
  //   path: "/",
  //   icon: <FaAppleWhole />,
  //   allowedRoles: [0],
  //   // visible: true,
  // },
  // {
  //   key: "Announcement",
  //   label: "Announcement",
  //   path: "/",
  //   icon: <FaAppleWhole />,
  //   allowedRoles: [0],
  //   visible: false,
  // },
  // {
  //   key: "AuditTrail",
  //   label: "Audit Trail",
  //   path: "/",
  //   icon: <FaAppleWhole />,
  //   allowedRoles: [0],
  //   visible: true,
  // },
];
