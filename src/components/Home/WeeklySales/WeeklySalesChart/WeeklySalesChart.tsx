"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registra los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sab", "Dom"],
  datasets: [
    {
      label: "Ventas semanales",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#70FFDA",
      borderColor: "#70FFDA",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#70FFDA",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#70FFDA",
      pointHoverBorderColor: "#70FFDA",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
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

const WeeklySalesChart = () => {
  return <Line data={data} options={options} />;
};

export default WeeklySalesChart;
