import React from "react";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expenses = () => {
  return (
    <>
      <article className="font-lato-bold">
        <h3 className="font-lato-bold text-white">GASTOS</h3>
      </article>

      <article className="flex items-center justify-center">
        <ExpensesChart />
      </article>
    </>
  );
};

export default Expenses;
