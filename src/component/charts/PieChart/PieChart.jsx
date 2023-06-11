import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getFilteredData } from "api/api";

function PieChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [data, setData] = React.useState([]);

  const ordersData = {
    labels: ["ارسال شده", "در حال بررسی"],
    datasets: [
      {
        data: data,
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 159, 64, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 159, 64, 1)"],
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
      getFilteredData("orders", "deliveryStatus", "fulfilled"),
      getFilteredData("orders", "deliveryStatus", "pending"),
    ]).then((data) => {
      setData([data[0].length, data[1].length]);
      window.scrollTo(0, 0);
    });
  }, []);

  return <Pie data={ordersData} options={options} />;
}

export default PieChart;
