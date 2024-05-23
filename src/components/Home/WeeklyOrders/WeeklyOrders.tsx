import React from "react";
import WeeklyOrdersChart from "./WeeklyOrdersChart/WeeklyOrdersChart";

const WeeklyOrders = () => {
  return (
    <>
      <article className="font-lato-bold">
        <h3 className="font-lato-bold text-white">PEDIDOS SEMANALES</h3>
        <p className="font-lato-black text-4xl text-white">5.987,34</p>
      </article>

      <article className="flex items-center justify-center">
        <WeeklyOrdersChart />
      </article>
    </>
  );
};

export default WeeklyOrders;
