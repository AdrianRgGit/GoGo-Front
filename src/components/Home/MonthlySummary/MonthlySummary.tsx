import React from "react";

const MonthlySummary = () => {
  return (
    <article className="flex h-full flex-col items-center font-lato-bold">
      <h3 className="font-lato-bold text-white">RESUMEN MENSUAL</h3>

      <div className="flex h-full flex-col items-center justify-center p-4">
        <div className="mb-6 flex gap-x-12">
          <div>
            <p className="font-lato-bold text-white">Ventas este mes</p>
            <p className="font-lato-black text-4xl text-white">5.987,34</p>
          </div>

          <div>
            <p className="font-lato-bold text-white">Ventas este mes</p>
            <p className="font-lato-black text-4xl text-white">5.987,34</p>
          </div>
        </div>

        <div className="flex gap-x-12">
          <div>
            <p className="font-lato-bold text-white">Ventas este mes</p>
            <p className="font-lato-black text-4xl text-white">5.987,34</p>
          </div>

          <div>
            <p className="font-lato-bold text-white">Ventas este mes</p>
            <p className="font-lato-black text-4xl text-white">5.987,34</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MonthlySummary;
