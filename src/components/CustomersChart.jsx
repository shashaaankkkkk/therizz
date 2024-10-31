// components/CustomersChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", customers: 1200 },
  { name: "Feb", customers: 1100 },
  { name: "Mar", customers: 1500 },
  { name: "Apr", customers: 1400 },
  { name: "May", customers: 1300 },
  { name: "Jun", customers: 1600 },
];

const CustomersChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="customers" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomersChart;
