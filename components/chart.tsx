"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
 {
  name: "Jan",
  uv: 4000,
  pv: 2400,
  amt: 2400
 },
 {
  name: "Feb",
  uv: 3000,
  pv: 1398,
  amt: 2210
 },
 {
  name: "Mar",
  uv: 2000,
  pv: 9800,
  amt: 2290
 },
 {
  name: "Apr",
  uv: 2780,
  pv: 3908,
  amt: 2000
 },
 {
  name: "May",
  uv: 1890,
  pv: 4800,
  amt: 2181
 },
 {
  name: "Jun",
  uv: 2390,
  pv: 3800,
  amt: 2500
 },
 {
  name: "Jul",
  uv: 3490,
  pv: 4300,
  amt: 2100
 },
 {
  name: "Aug",
  uv: 2400,
  pv: 2400,
  amt: 2400
 },
 {
  name: "Sep",
  uv: 3500,
  pv: 1300,
  amt: 2210
 },
 {
  name: "Oct",
  uv: 3000,
  pv: 9800,
  amt: 2290
 },
 {
  name: "Nov",
  uv: 2000,
  pv: 3908,
  amt: 2000
 },
 {
  name: "Dec",
  uv: 1890,
  pv: 4800,
  amt: 2181
 }
]

const Chart = () => {
 return (
  <div style={{ width: "100%", height: 400 }}>
   <ResponsiveContainer>
    <LineChart width={1100} height={300} data={data}>
     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
     <CartesianGrid stroke="#cccccc" />
     <XAxis dataKey="name" />
     <YAxis />
    </LineChart>
   </ResponsiveContainer>
  </div>
 )
}

export default Chart