import React from "react";
import ReactECharts from "echarts-for-react";
import { Card } from "react-bootstrap";

const DriverProgressChart = () => {
  const months = [
    "Mar 2024", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan 2025", "Feb"
  ];

  const scores = [80, 90, 70, 80, 70, 85, 95, 70, 85, 70, 75, 88];

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: months,
      name: 'Months',
      nameLocation: 'middle',
      nameGap: 30,
      axisLine: { lineStyle: { color: '#777777' } },
      axisLabel: { color: '#666' },
      splitLine: { show: false }  // remove vertical grid lines
    },
    yAxis: {
      type: 'value',
      name: 'Score',
      min: 0,
      max: 110,
      interval: 10,
      nameTextStyle: { align: 'center' },
      axisLine: { lineStyle: { color: '#777777' } },
      axisLabel: { color: '#666' },
      splitLine: { show: false }  // remove horizontal grid lines
    },
    series: [
      {
        data: scores,
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#3b5fc1'
        },
        label: {
          show: true,
          position: 'top',
          formatter: '{c}',
          color: '#333',
          fontWeight: 500
        },
        lineStyle: {
          color: '#3b5fc1',
          width: 2
        }
      }
    ],
    grid: {
      left: '3%',
      right: '3%',
      bottom: '10%',
      top: '10%',
      containLabel: true
    }
  };
  

  return (
    <Card className="p-4 shadow-sm bg-white rounded ">
      <h3 className=" mb-4" style={{fontWeight:'500'}}>Driver Progress</h3>
      <ReactECharts option={option} style={{ height: "550px", width: "100%" }} />
    </Card>
  );
};

export default DriverProgressChart;
