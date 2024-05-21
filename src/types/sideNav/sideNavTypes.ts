import { ReactElement } from "react";

export interface tabNavProps {
  children: string;
  href: string;
  icon: ReactElement;
  expanded: boolean;
}

export interface profileNavProps {
  expanded: boolean;
}
