import React, { useEffect, useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import apiData from "./APIdata";
import ApiData from './APIdata';



const LineChart = () => {
    const [ currencyPair, setCurrencyPair ] = useState<string>("USD/ZAR");
    const chartRef = useRef<Chart>()
    
    const ApiData = apiData()
    
    const currencyDate = ApiData.map((item) =>Object.keys(item.data)[0]);
    console.log(currencyDate)
    const usdToZarData = ApiData.map((item) =>item.data[Object.keys(item.data)[0]].ZAR);

    const data = {
        labels: currencyDate,
        datasets: [
            {
                label: "USD/ZAR",
                data: usdToZarData,
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

    //

    useEffect(() => {
        // Cleanup previous chart instance before rendering a new one
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // Create new chart instance
        chartRef.current = new Chart(document.getElementById("line-chart"), {
            type: "line",
            data: data,
            options: options
        });

        // Return cleanup function
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data, options]);

    //


    return (
        <div className="text-center w-61">
            
            <canvas id="line-chart" />
        </div>
    );
}

export default LineChart;
