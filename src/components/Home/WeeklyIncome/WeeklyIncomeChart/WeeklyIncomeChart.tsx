"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registra los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sab", "Dom"],
  datasets: [
    {
      label: "Beneficio semanal",
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75,192,192,0.6)",
      hoverBorderColor: "rgba(75,192,192,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Beneficio semanal",
    },
  },
};

const WeeklyIncomeChart = () => {
  return <Bar data={data} options={options} />;
};

export default WeeklyIncomeChart;
