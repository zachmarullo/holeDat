// @ts-nocheck

import React, {useEffect, useState } from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement
// } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement
// )

const About = () => {

  // type chart = {
  //   labels: string[];
  //   datasets: { label: string, data: number[], borderColor: string, backgroundColor: string}[];
  // };
  const [barData, setBarData] = useState({});



  const chartData ={ 
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
    {
      id: 1,
      data: 3,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
    },
    {
      id: 2,
      data: 3,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
    },
    {
      id: 3,
      data: 3,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
    },
    {
      id: 4,
      data: 3,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
    },
    {
      id: 5,
      data: 3,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
    },
    {
      id: 6,
      data: 3,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
    },
    {
      id: 7,
      data: 3,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
    }
  ]};

  useEffect(() => {
    if(Object.keys(chartData).length !== 0) {
    setBarData(chartData)}}, []);

  return (
    <Bar data={barData} />
  )
}

export default About;
