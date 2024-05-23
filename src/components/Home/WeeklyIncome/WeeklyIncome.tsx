import React from "react";
import WeeklyIncomeChart from "./WeeklyIncomeChart/WeeklyIncomeChart";

const WeeklyIncome = () => {
  return (
    <>
      <article className="font-lato-bold">
        <h3 className="font-lato-bold text-white">BENEFICIO SEMANAL</h3>
        <p className="font-lato-black text-4xl text-white">5.987,34</p>
      </article>

      <article className="flex items-center justify-center">
        <WeeklyIncomeChart />
      </article>
    </>
  );
};

export default WeeklyIncome;
