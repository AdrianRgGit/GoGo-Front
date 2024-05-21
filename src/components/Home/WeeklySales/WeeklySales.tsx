import React from "react";
import WeeklySalesChart from "./WeeklySalesChart/WeeklySalesChart";

const WeeklySales = () => {
  return (
    <>
      <article className="font-lato-bold">
        <h3 className="font-lato-bold text-gray">VENTAS SEMANALES</h3>
        <p className="font-lato-black text-4xl text-black">5.987,34</p>
      </article>

      <article className="flex items-center justify-center">
        <WeeklySalesChart />
      </article>
    </>
  );
};

export default WeeklySales;
