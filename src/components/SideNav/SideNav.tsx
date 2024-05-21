import React from "react";
import ProfileNav from "./ProfileNav/ProfileNav";
import TabNav from "./TabNav/TabNav";
import { Bell, HelpCircle, Home, PanelBottom, Wrench } from "lucide-react";

const SideNav = () => {
  return (
    <>
      <nav className="flex w-full flex-col justify-center gap-y-10 bg-red-500">
        <TabNav href="#" icon={<Home size={28} />}>
          INICIO
        </TabNav>
        <TabNav href="#" icon={<PanelBottom size={28} />}>
          PANEL DE CONTROL
        </TabNav>
        <TabNav href="#" icon={<Wrench size={28} />}>
          FUNCIONALIDADES
        </TabNav>
        <TabNav href="#" icon={<Bell size={28} />}>
          NOTIFICACIONES
        </TabNav>
        <TabNav href="#" icon={<HelpCircle size={28} />}>
          SOPORTE
        </TabNav>
      </nav>

      <ProfileNav />
    </>
  );
};

export default SideNav;
