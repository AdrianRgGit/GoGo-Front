import { ReactElement } from "react";

export interface sideNavProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface tabNavProps {
  children: string;
  href: string;
  icon: ReactElement;
  expanded: boolean;
}

export interface profileNavProps {
  expanded: boolean;
}
