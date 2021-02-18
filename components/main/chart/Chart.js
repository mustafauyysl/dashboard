import React, { useState, useEffect } from "react";
import Div from "../common/Div";
import Text from "../common/Text";

import { Line } from "react-chartjs-2";

export default () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Current Week",
          data: [4500, 5500, 12000, 5400, 11000, 18542, 6000],
          backgroundColor: "transparent",
          borderWidth: 4,
          borderColor: ["red"],
        },
        {
          label: "Previous Week",
          data: [5800, 17000, 11000, 8500, 9000, 12000, 5100],
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: ["white"],
          borderDash: [10, 5],
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <Div width="92%" height="355px">
      <Text>Revenue</Text>
        <Line
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: true,
                    color: "#2B314D",
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
    </Div>
  );
};
