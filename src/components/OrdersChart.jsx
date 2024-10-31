// components/OrdersChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2024-10-01", orders: 30 },
  { date: "2024-10-02", orders: 20 },
  { date: "2024-10-03", orders: 50 },
  { date: "2024-10-04", orders: 35 },
  { date: "2024-10-05", orders: 40 },
  { date: "2024-10-06", orders: 60 },
  { date: "2024-10-07", orders: 45 },
  // Add more data as needed
];

const OrdersChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="orders" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default OrdersChart;
