import React, { ReactElement, useEffect } from "react";
import { Chart, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function main(): ReactElement {
  const data = {
    labels: [
      "30 - 45",
      "45 - 60",
      "60 - 75",
      "75 - 90",
      "90 - 105",
      "105 - 120",
      "120 - 135",
      "135 - 150",
      "150 - 165",
      "165 - 180",
    ],
    datasets: [
      {
        label: "Number of Users",
        data: [4, 7, 17, 30, 33, 36, 35, 30, 25, 13],
        backgroundColor: "#5d7763",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
          },
          max: 10,
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#5d7763",
            fontSize: 12,
            fontFamily: '"TT Hoves", sans-serif',
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        color: "#5d7763",
        align: "top",
        anchor: "end",
        offset: 0,
        font: {
          family: '"TT Hoves", sans-serif',
          size: 14,
          weight: 700,
        },
        formatter: function (value: number, context: any) {
          if (context.dataset.data.length === context.dataIndex + 1) {
            return `${value} users`;
          }
          return value;
        },
      },
    },
  };

  useEffect(() => {
    Chart.pluginService.register(ChartDataLabels);
  }, []);

  return (
    <>
      <Bar data={data} options={options} height={77.8}></Bar>
    </>
  );
}
