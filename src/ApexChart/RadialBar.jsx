import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBar = ({ windowWidth }) => {
  const state = {
    series: [78, 95, 59],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '15px',
              formatter: function (w) {
                return 249;
              },
            },
          },
        },
      },
      colors: ['#4935ff', '#4935ff', '#85afff'], // Set the colors for the individual series here
      labels: ['Average', 'Top', 'Me'],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={180}
      />
    </div>
  );
};

export default RadialBar;
