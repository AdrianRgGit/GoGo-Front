import { profileNavProps } from "@/types/sideNavTypes";
import Link from "next/link";
import React from "react";

const ProfileNav = ({ expanded }: profileNavProps) => {
  return (
    <Link className="flex items-center justify-center gap-x-6" href="/profile">
      <img
        className="rounded-full"
        width={64}
        height={64}
        src="https://picsum.photos/200"
        alt="img"
      />

      {expanded && (
        <div>
          <p className="text-xl">Nombre usuario</p>
          <p className="text-xs">Rol</p>
        </div>
      )}
    </Link>
  );
};

export default ProfileNav;
