import { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = () => {
    const [ currencyPair, setCurrencyPair ] = useState<string>("USD/ZAR");

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: "USD/ZAR",
                data: [65, 59, 80, 56, 55, 40],
                fill: true,
                borderColor: "rgb(75, 192, 192)",
                pointBorderColor: "aqua",
                tension: 0.4
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="text-center w-61">
            <button className="p-4 py-2 rounded-lg shadow-md cursor-pointer bg-cyan-500 shadow-cyan-500/50">CONVERT</button>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineChart;
