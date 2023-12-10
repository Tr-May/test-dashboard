import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [0, 15, 10, 5, 25, 20],
        backgroundColor: "skyblue",
      },
    ],
  };
  return (
    <div className="bg-light mt-2">
      <Line data={data} />
    </div>
  );
};

export default LineChart;
