import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const series = [
    {
      name: 'Employer: K 73,500',
      data: [20, 20, 20, 22, 25, 27, 30],
    },
    {
      name: 'Employee: K 52,500',
      data: [60, 61, 62, 64, 66, 68, 70],
    },
    {
      name: 'Total Interest: K 244,313',
      data: [80, 82, 84, 86, 88, 88, 90],
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [20, 25, 30, 35, 40, 60, 65],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
      tickAmount: 5, // Display 4 ticks on the y-axis
      labels: {
        formatter: function (val) {
          return `$ ${val * 10}`; // Add the $ symbol to the y-axis labels
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val * 10 + ' thousands';
        },
      },
    },
    colors: ['#4935ff', '#4935ff', '#85afff'], // Add the new color here
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default ApexChart;
