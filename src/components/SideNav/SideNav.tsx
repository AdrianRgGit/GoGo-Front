import React from "react";
import ProfileNav from "./ProfileNav/ProfileNav";
import TabNav from "./TabNav/TabNav";

const SideNav = () => {
  return (
    <>
      <nav className="flex flex-col gap-y-10 self-start w-full">
        <TabNav href="#">INICIO</TabNav>
        <TabNav href="#">PANEL DE CONTROL</TabNav>
        <TabNav href="#">FUNCIONALIDADES</TabNav>
        <TabNav href="#">NOTIFICACIONES</TabNav>
        <TabNav href="#">SOPORTE</TabNav>
      </nav>

      <ProfileNav />
    </>
  );
};

export default SideNav;
