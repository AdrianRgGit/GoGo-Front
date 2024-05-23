"use client";

import React, { useState } from "react";
import SideNav from "@/components/SideNav/SideNav";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex">
      <SideNav isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <main
        className={`flex-grow p-4 transition-all duration-300 ${isExpanded ? "ml-[21%]" : "ml-28"}`}
      >
        {children}
      </main>
    </div>
  );
};

export default ClientLayout;