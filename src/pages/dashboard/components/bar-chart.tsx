/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { AnalyticsResponse } from "../queries";

type Props = {
  data: AnalyticsResponse;
};

export const BarChart = ({ data }: Props) => {
  console.log(data);
  const [state, setState] = useState({
    series: [
      {
        name: "Inactive",
        data: [],
      },
      {
        name: "active",
        data: [],
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
        categories: data?.map((d) => d.month) || [],
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
        enabled: false,
        // position: "right",
        // offsetY: 40,
      },
      fill: {
        colors: ["#0F00BD", "#D1DFFE"],
        // opacity: 1,
      },
    },
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    setState((prev) => {
      return {
        ...prev,
        series: [
          {
            name: "Inactive",
            data: data?.map((d) => {
              return d?.active_customers ?? "0";
            }),
          },
          {
            name: "Active",
            data: data?.map((d) => {
              return d?.inactive_customers ?? "0";
            }),
          },
        ],
        options: {
          xaxis: {
            ...prev.options.xaxis,
            categories: data?.map((d) => d.month) || [],
          },
        },
        ...prev.options
      };
    });
  }, [data]);
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options as unknown as ApexCharts.ApexOptions}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};
