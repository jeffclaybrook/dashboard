"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
 { name: "Group A", value: 400 },
 { name: "Group B", value: 300 },
 { name: "Group C", value: 250 },
 { name: "Group D", value: 200 }
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]
const RADIAN = Math.PI / 180

const renderCustomLabel = ({
 cx,
 cy,
 midAngle,
 innerRadius,
 outerRadius,
 percent
}: {
 cx: number
 cy: number
 midAngle: number
 innerRadius: number
 outerRadius: number
 percent: number
}) => {
 const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
 const x = cx + radius * Math.cos(-midAngle * RADIAN);
 const y = cy + radius * Math.sin(-midAngle * RADIAN)

 return (
  <text
   x={x}
   y={y}
   fill="white"
   textAnchor={x > cx ? "start" : "end"}
   dominantBaseline="central"
  >
   {`${(percent * 100).toFixed(0)}%`}
  </text>
 )
}

const PieGraph = () => {
 return (
  <div style={{ width: "100%", height: 300 }}>
   <ResponsiveContainer>
    <PieChart
     width={300}
     height={300}
    >
     <Pie
      data={data}
      cx="50%"
      cy="50%"
      labelLine={false}
      label={renderCustomLabel}
      outerRadius={140}
      fill="#8884d8"
      dataKey="value"
     >
      {data.map((item, i) => (
       <Cell
        key={i}
        fill={COLORS[i % COLORS.length]}
       />
      ))}
     </Pie>
    </PieChart>
   </ResponsiveContainer>
  </div>
 )
}

export default PieGraph