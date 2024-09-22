import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
];

const LineChartComponent = () => {
  const [activeTimeRange, setActiveTimeRange] = useState('7 days');

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
    <Typography
        variant="body2"
        color="primary"
        sx={{
            marginTop: '40px !important', 
            marginLeft: '20px !important', 
            alignSelf: 'flex-start',
            }}
    >
        View details
    </Typography>
    </Box>
  );
};

export default LineChartComponent;
