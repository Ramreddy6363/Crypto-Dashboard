import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale
);

const API_URL = import.meta.env.VITE_COIN_API_KEY;

const CoinChart = ({ coinId }) => {
  const [ChartData, setChartData] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      const cachedData = localStorage.getItem(`chartData-${coinId}`);
      if (cachedData) {
        setChartData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${API_URL}/${coinId}/market_chart?vs_currency=inr&days=7`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch chart data');
        }
        const data = await res.json();
        const prices = data.prices.map((price) => ({
          x: price[0],
          y: price[1],
        }));
        const chartData = {
          datasets: [
            {
              label: 'Price (INR)',
              data: prices,
              fill: true,
              borderColor: '#007bff',
              backgroundColor: 'rgba(0,123,255,0.1)',
              pointRadius: 0,
              tension: 0.3,
            },
          ],
        };
        localStorage.setItem(`chartData-${coinId}`, JSON.stringify(chartData));
        setChartData(chartData);
      } catch (err) {
        console.error('Error fetching chart data:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, [coinId]);

  return (
    <div className="mt-3">
      {!Loading && ChartData ? (
        <Line
          data={ChartData}
          options={{
            responsive: true,
            animation: false, 
            plugins: {
              legend: { display: false },
              tooltip: { mode: 'index', intersect: false },
            },
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 7,
                },
              },
              y: {
                ticks: {
                  callback: (value) => `₹${value.toLocaleString()}`,
                },
              },
            },
          }}
        />
      ) : (
        <div className="animate-pulse">
          <div className="h-40 bg-gray-700 rounded-md"></div>
        </div>
      )}
    </div>
  );
};

export default CoinChart;
