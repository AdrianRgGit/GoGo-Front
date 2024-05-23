import { tabNavProps } from "@/types/sideNavTypes";
import React from "react";

const TabNav = ({ href, icon, children, expanded }: tabNavProps) => {
  return (
    <a
      href={href}
      className="hover:text-cyan hover:bg-cyan/20 flex items-center gap-x-4 rounded p-2 text-white transition-colors duration-200"
    >
      {icon}
      {expanded && <span>{children}</span>}
    </a>
  );
};

export default TabNav;
