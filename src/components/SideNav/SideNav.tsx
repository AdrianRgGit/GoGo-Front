import React from "react";
import ProfileNav from "./ProfileNav/ProfileNav";
import TabNav from "./TabNav/TabNav";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Home,
  PanelBottom,
  Wrench,
} from "lucide-react";
import { sideNavProps } from "@/types/sideNavTypes";

const SideNav = ({ isExpanded, setIsExpanded }: sideNavProps) => {
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`fixed left-0 top-0 flex h-screen ${isExpanded ? "w-1/5" : "w-24"} bg-dark-cyan flex-col items-center justify-between p-6 py-4 transition-all duration-150`}
    >
      <header className="mb-4 flex h-32 w-full flex-col items-center justify-center">
        {isExpanded ? (
          <>
            <h1 className="font-lato-bold text-lg">GOGO</h1>
            <small className="text-xs">DELIVERY</small>
          </>
        ) : (
          <>
            <h1 className="font-lato-bold text-lg">GOGO</h1>
            <small className="text-xs">DELIVERY</small>
          </>
        )}
      </header>

      <nav
        className={`flex w-full flex-col justify-center gap-y-10 ${!isExpanded && "items-center"}`}
      >
        <TabNav href="#" icon={<Home size={28} />} expanded={isExpanded}>
          INICIO
        </TabNav>
        <TabNav href="#" icon={<PanelBottom size={28} />} expanded={isExpanded}>
          PANEL DE CONTROL
        </TabNav>
        <TabNav href="#" icon={<Wrench size={28} />} expanded={isExpanded}>
          FUNCIONALIDADES
        </TabNav>
        <TabNav href="#" icon={<Bell size={28} />} expanded={isExpanded}>
          NOTIFICACIONES
        </TabNav>
        <TabNav href="#" icon={<HelpCircle size={28} />} expanded={isExpanded}>
          SOPORTE
        </TabNav>
      </nav>

      <button
        onClick={toggleExpand}
        className="bg-dark-cyan absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full p-2 text-white"
      >
        {isExpanded ? <ChevronLeft /> : <ChevronRight />}
      </button>

      <footer className="w-full">
        <ProfileNav expanded={isExpanded} />
      </footer>
    </aside>
  );
};

export default SideNav;
