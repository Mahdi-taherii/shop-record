import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { getFilteredData } from "api/api";

function PolarAreaChart() {
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  const [data, setData] = React.useState([]);

  const ordersData = {
    labels: [
      " پوشاک زنانه",
      " اکسسوری زنانه",
      " پوشاک مردانه",
      " اکسسوری مردانه",
    ],
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgba(255, 8, 78,0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(34, 211, 238,0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgb(255, 8, 78)",
          "rgb(255, 159, 64)",
          "rgb(34, 211, 238)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Vazir FD",
            size: "14px",
            weight: "bold",
          },
        },
        position: "bottom",
        align: "start",
      },
      tooltip: {
        bodyFont: {
          family: "Vazir FD",
        },
        titleFont: {
          family: "Vazir FD",
        },
      },
    },
  };

  React.useEffect(() => {
    Promise.all([
      getFilteredData("products", "gender", "زنانه&category=پوشاک"),
      getFilteredData("products", "gender", "زنانه&category=اکسسوری"),
      getFilteredData("products", "gender", "مردانه&category=پوشاک"),
      getFilteredData("products", "gender", "مردانه&category=اکسسوری"),
    ]).then((data) => {
      setData([data[0].length, data[1].length, data[2].length, data[3].length]);
      window.scrollTo(0, 0);
    });
  }, []);

  return <PolarArea data={ordersData} options={options} />;
}

export default PolarAreaChart;
