import { graphContainerProps } from "@/types/homeTypes";
import React from "react";

const GraphContainer = ({ children, gridArea }: graphContainerProps) => {
  return (
    <section
      className={`bg-black1 flex flex-col gap-y-4 rounded-lg border border-gray/80 p-4`}
      style={{ gridArea: gridArea }}
    >
      {children}
    </section>
  );
};

export default GraphContainer;
