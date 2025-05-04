import React from "react";
import ReactECharts from "echarts-for-react";
import { icon } from "leaflet";

const AlertSummaryChart = () => {
  const option = {
    title: {
      text: "Alert Summary",
      left: "left",
      textStyle: {
        fontSize: 24,
        fontWeight: "500",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: [
        "6 Jan - 12 Jan",
        "13 Jan - 19 Jan",
        "20 Jan - 26 Jan",
        "27 Jan - 2 Feb",
      ],
      top: 30,
      icon: "circle",
      itemWidth: 20, 
      itemHeight: 20,
      left: "right",
    },
    grid: {
      top: 80,
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      name: "Events",
      type: "category",

      data: [
        "Speed bump",
        "Harsh acceleration",
        "Over Speeding",
        "Over loading",
        "Sharp cornering",
        "Hand brake while driving",
        "Low SoC",
        "Low departure",
        "Seat belt",
        "High battery consumption",
      ],
      axisLabel: {
        interval: 0,
        formatter: function (value) {
          const lastSpaceIndex = value.lastIndexOf(" ");
          if (lastSpaceIndex !== -1) {
            return (
              value.substring(0, lastSpaceIndex) +
              "\n" +
              value.substring(lastSpaceIndex + 1)
            );
          }
        },
      },
    },
    yAxis: {
      type: "value",
      name: "Alerts",
      splitLine: { show: false },
    },
    series: [
      {
        name: "6 Jan - 12 Jan",
        type: "bar",
        data: [5, 4, 5, 4, 2, 4, 6, 5, 6, 4],
        itemStyle: {
          color: "#cce5ff",
        },
        label: {
          show: true,
          position: "top",
          fontSize: 12,
          color: "#555555",
        },
      },
      {
        name: "13 Jan - 19 Jan",
        type: "bar",
        data: [8, 5, 6, 5, 6, 5, 7, 6, 8, 5],
        itemStyle: {
          color: "#66b3ff",
        },
        label: {
          show: true,
          position: "top",
          fontSize: 12,
          color: "#555555",
        },
      },
      {
        name: "20 Jan - 26 Jan",
        type: "bar",
        data: [11, 2, 11, 2, 11, 7, 11, 2, 11, 6],
        itemStyle: {
          color: "#007bff",
        },
        label: {
          show: true,
          position: "top",
          fontSize: 12,
          color: "#555555",
        },
      },
      {
        name: "27 Jan - 2 Feb",
        type: "bar",
        data: [7, 6, 8, 6, 8, 6, 8, 5, 7, 6],
        itemStyle: {
          color: "#004080",
        },
        label: {
          show: true,
          position: "top",
          fontSize: 12,
          color: "#555555",
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "500px", width: "100%" }} />
  );
};

export default AlertSummaryChart;
