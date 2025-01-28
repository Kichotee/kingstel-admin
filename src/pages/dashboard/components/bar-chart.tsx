/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

type Props = {
  data: any;
};

export const BarChart = ({ data }: Props) => {
  const [state, setState] = useState({
    series: [
      {
        name: "January",
        data: [44, 55, 41, 67, 22, 43, 67, 22, 43, 67, 22, 43],
      },
      {
        name: "february",
        data: [13, 23, 20, 8, 13, 27, 13, 78, 13, 28, 13],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          dataLabels: {
            enabled: false,
            enabledOnSeries: [],
          },
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      dataLabels: {
        enabled: false,
      },
    
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45px",
          borderRadius: 1,
          // borderRadiusApplication: "end", // 'around', 'end'
          // borderRadiusWhenStacked: "last", // 'all', 'last'
          dataLabels: {
            // position:"bottom",
            enabled: false,
          },
        },
      },
      xaxis: {
        type: "month",
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      legend: {
        enabled:false,
        // position: "right",
        // offsetY: 40,
      },
      fill: {
        colors: ["#0F00BD", "#D1DFFE"],
        // opacity: 1,
      },
    },
  });
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};
