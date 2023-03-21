import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart({ chartData }) {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'bar',
        data: {
          labels: chartData.map((data) => data.property_type),
          datasets: [
            {
              label: 'Prices',
              data: chartData.map((data) => data.price),
              backgroundColor: chartData.map((data) => data.color),
            },
          ],
        },
      });
    return () => {
        chartInstance.current.destroy()
      };
  }, [chartData]);

  return (
    <div>
      <canvas ref={chartContainer} id="myChart"></canvas>
    </div>
  );
}

export default BarChart;


// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const BarChart = ({ chartData }) => {
//   const data = {
//     labels: chartData.map(data => data.label),
//     datasets: [
//       {
//         label: 'Bar Chart',
//         data: chartData.map(data => data.value),
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return <Bar data={data} />;
// };

// export default BarChart;
