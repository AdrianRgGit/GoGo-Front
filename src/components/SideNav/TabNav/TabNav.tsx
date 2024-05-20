import { tabNavProps } from "@/types/sideNav/sideNavTypes";
import React from "react";

const TabNav = ({ children, href }: tabNavProps) => {
  return (
    <a
      className="flex-grow py-2 hover:text-yellow transition-colors duration-200"
      href={href}
    >
      {children}
    </a>
  );
};

export default TabNav;
