import { tabNavProps } from "@/types/sideNavTypes";
import React from "react";

const TabNav = ({ href, icon, children, expanded }: tabNavProps) => {
  return (
    <a
      href={href}
      className="flex items-center gap-x-4 text-white transition-colors duration-200 hover:text-white/20"
    >
      {icon}
      {expanded && <span>{children}</span>}
    </a>
  );
};

export default TabNav;
