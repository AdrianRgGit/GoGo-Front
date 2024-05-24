import { tabNavProps } from "@/types/sideNavTypes";
import Link from "next/link";
import React from "react";

const TabNav = ({ href, icon, children, expanded }: tabNavProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-4 rounded p-2 text-white transition-colors duration-200 hover:bg-cyan/20 hover:text-cyan"
    >
      {icon}
      {expanded && <span>{children}</span>}
    </Link>
  );
};

export default TabNav;
