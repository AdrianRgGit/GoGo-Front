import { graphContainerProps } from "@/types/homeTypes";
import React from "react";

const GraphContainer = ({ children, gridArea }: graphContainerProps) => {
  return (
    <section
      className={`flex flex-col gap-y-4 rounded border-gray bg-white p-4 [grid-area:${gridArea}]`}
    >
      {children}
    </section>
  );
};

export default GraphContainer;
