import "./Chart.css";

import { Line } from "react-chartjs-2";
import {  Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement
)

function Chart() {
    
    const data = {
        labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Sleep Hours',
            data: [6, 5, 7, 4, 8, 6, 7],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.5
          }
        ]
      };
      
      const options = {
        scales: {
            y: {
              ticks: {
                color: 'transparent',
              }
            }
          }
      };
      
    return (
        <div>
            <Line data={data} options={options}></Line>
        </div>
    );
}

export default Chart