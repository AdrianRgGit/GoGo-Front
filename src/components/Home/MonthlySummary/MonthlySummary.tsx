import React from "react";

const MonthlySummary = () => {
  return (
    <article className="flex flex-col items-center justify-between font-lato-bold">
      <h3 className="font-lato-bold text-gray">RESUMEN MENSUAL</h3>

      <div className="p-4">
        <div>
          <p className="font-lato-bold text-gray">Ventas este mes</p>
          <p className="font-lato-black text-4xl text-black">5.987,34</p>
        </div>

        <div>
          <p className="font-lato-bold text-gray">Ventas este mes</p>
          <p className="font-lato-black text-4xl text-black">5.987,34</p>
        </div>

        <div>
          <p className="font-lato-bold text-gray">Ventas este mes</p>
          <p className="font-lato-black text-4xl text-black">5.987,34</p>
        </div>

        <div>
          <p className="font-lato-bold text-gray">Ventas este mes</p>
          <p className="font-lato-black text-4xl text-black">5.987,34</p>
        </div>
      </div>
    </article>
  );
};

export default MonthlySummary;
