import React from "react";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expenses = () => {
  return (
    <>
      <article className="font-lato-bold">
        <h3 className="font-lato-bold text-gray">Pérdidas</h3>
        <p className="font-lato-black text-4xl text-black">5.987,34</p>
      </article>

      <article className="flex items-center justify-center">
        <ExpensesChart />
      </article>
    </>
  );
};

export default Expenses;
