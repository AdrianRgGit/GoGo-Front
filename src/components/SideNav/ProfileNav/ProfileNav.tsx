import React from "react";

const ProfileNav = () => {
  return (
    <section className="w-full">
      <a className="flex items-center justify-center gap-x-6" href="#">
        <img
          className="rounded-full"
          width={64}
          height={64}
          src="https://picsum.photos/200"
          alt="img"
        />

        <div>
          <p className="text-xl">Nombre usuario</p>
          <p className="text-xs">Rol</p>
        </div>
      </a>
    </section>
  );
};

export default ProfileNav;
