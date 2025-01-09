import React from "react";

import Sidebar from "./sidebar";
import Header from "./header";

type ILayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className=" w-full flex flex-row">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <main className="flex-1 space-y-4 text-black min-h-screen flex flex-col items-center md:px-7 w-full sm:px-2 px-5 pt-[30px] h-[calc(100vh-80px)] bg-[#f0f0f0] overflow-y-auto">
           
            <div className="w-full">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
