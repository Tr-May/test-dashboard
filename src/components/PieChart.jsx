import React from "react";
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [0, 5, 10, 15, 20, 25],
        backgroundColor: "skyblue",
      },
    ],
  };
  return (
    <div className="bg-light mt-2">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
