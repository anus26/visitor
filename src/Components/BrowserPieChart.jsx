
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { transformDataForPieChart } from '../transformDataForPieChart';

const BrowserPieChart = ({ visits, field }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!visits || visits.length === 0) return;

    const chartData = transformDataForPieChart(visits, field);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'pie',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [visits, field]);

  return <canvas ref={chartRef} className="!w-full !h-48  gap-5 "  />;
};

export default BrowserPieChart;


