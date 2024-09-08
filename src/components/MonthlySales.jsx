import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const MonthlySales = () => {
  // Dummy sales data
  const salesData = [
    { month: 'January', sales: 3 },
    { month: 'February', sales: 2},
    { month: 'March', sales: 4 },
    { month: 'April', sales: 5 },
    { month: 'May', sales: 6 },
    { month: 'June', sales: 7 },
    { month: 'July', sales: 8 },
    { month: 'August', sales: 9 },
    { month: 'September', sales: 10 },
    { month: 'October', sales: 11 },
    { month: 'November', sales: 12 },
    { month: 'December', sales: 13 },
  ];

  // Prepare data for the chart
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: 'Monthly Sales',
        data: salesData.map((data) => data.sales),
        backgroundColor: 'rgba(139, 92, 246, 0.6)', // Tailwind CSS violet-500 color with opacity
        borderColor: 'rgba(139, 92, 246, 1)', // Tailwind CSS violet-500 color
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default MonthlySales;
