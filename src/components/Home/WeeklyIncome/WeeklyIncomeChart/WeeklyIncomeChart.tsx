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
      backgroundColor: "#D0FEAF",
      borderColor: "#D0FEAF",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(208,254,175,0.6)",
      hoverBorderColor: "rgba(208,254,175,1)",
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
  scales: {
    x: {
      grid: {
        color: "rgba(143,146,146, 0.1)", // Color de la rejilla del eje x
      },
    },
    y: {
      grid: {
        color: "rgba(143,146,146, 0.1)", // Color de la rejilla del eje y
      },
    },
  },
};

const WeeklyIncomeChart = () => {
  return <Bar data={data} options={options} />;
};

export default WeeklyIncomeChart;
