"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  DoughnutController,
} from "chart.js";

// Registra los componentes necesarios
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  DoughnutController,
  ArcElement,
);

// Genera datos aleatorios para el gráfico de donut
const getRandomData = () => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 100));
};

// Configuración de datos
const data = {
  labels: ["A", "B", "C", "D"],
  datasets: [
    {
      label: "Datos Aleatorios",
      data: getRandomData(),
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Opciones de configuración
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Gráfico de Donut con Datos Aleatorios",
    },
    legend: {
      display: true,
      position: "top",
    },
    tooltips: {
      enabled: true,
    },
  },
};

const ExpensesChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default ExpensesChart;
