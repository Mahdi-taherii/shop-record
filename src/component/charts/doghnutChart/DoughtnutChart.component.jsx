import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getFilteredData } from "api/api";

function DoughnutChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [data, setData] = React.useState([]);

  const ordersData = {
    labels: ["موجود در انبار", "نا موجود"],
    datasets: [
      {
        data: data,
        backgroundColor: ["rgba(255, 8, 78,0.6)", "rgba(54, 54, 54,0.6)"],
        borderColor: ["rgb(255, 8, 78)", "rgb(54, 54, 54)"],
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
            size: "16px",
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
      getFilteredData("products", "", ""),
      getFilteredData("products", "inStock", 0),
    ]).then((data) => {
      setData([data[0].length - data[1].length, data[1].length]);
      window.scrollTo(0, 0);
    });
  }, []);

  return <Doughnut data={ordersData} options={options} />;
}

export default DoughnutChart;
