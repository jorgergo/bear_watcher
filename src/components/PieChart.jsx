// import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import '../styles/piechart.css';

const data = [
  { name: 'login.microsoftonline.com', value: 400 },
  { name: 'ntp.msn.com', value: 300 },
  { name: 'open.spotify.com', value: 300 },
  { name: 'outlook.office.com', value: 200 },
  { name: 'ab.chatgpt.com', value: 1000 },
  { name: 'expogdl.com', value: 500 },
  { name: 'amazonaws.com', value: 270 },
  { name: 'mail.google.com', value: 320 },
  { name: 'github.githubassets.com', value: 610 },
  { name: 'Otros', value: 800 },
];

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#FF4042',
  '#832DE9',
  '#FF40E0',
  '#4045FF',
  '#33E397',
  '#7EE92D',
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  // index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
      className='oswald-unique'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChartUI() {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill='#8884d8'
          dataKey='value'
          stroke='none'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout='vertical' verticalAlign='middle' align='right' />
      </PieChart>
    </ResponsiveContainer>
  );
}
