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

// Genera datos aleatorios
const getRandomData = (num) => {
  return Array.from({ length: num }, () => Math.floor(Math.random() * 100));
};

// Configuración de datos
const data = {
  labels: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  datasets: [
    {
      label: "Datos Aleatorios",
      backgroundColor: "rgba(153, 102, 255, 0.6)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(153, 102, 255, 0.8)",
      hoverBorderColor: "rgba(153, 102, 255, 1)",
      data: getRandomData(12),
    },
  ],
};

// Opciones de configuración
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "Gráfico de Barras con Datos Aleatorios",
    },
  },
};

const WeeklyOrdersChart = () => {
  return <Bar data={data} options={options} />;
};

export default WeeklyOrdersChart;
