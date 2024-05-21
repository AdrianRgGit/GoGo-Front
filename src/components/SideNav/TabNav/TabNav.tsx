import { tabNavProps } from "@/types/sideNav/sideNavTypes";
import React from "react";

const TabNav = ({ children, href, icon }: tabNavProps) => {
  return (
    <a
      className="flex flex-grow items-center gap-x-4 py-2 transition-colors duration-200 hover:text-yellow"
      href={href}
    >
      {icon}
      <p>{children}</p>
    </a>
  );
};

export default TabNav;
