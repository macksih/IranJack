import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

const barData = [
  { name: 'S', uv: 4000 },
  { name: 'M', uv: 3000 },
  { name: 'L', uv: 2000 },
  { name: 'XL', uv: 2780 },
  { name: 'XXL', uv: 1890 },
];

const BarChartComponent = () => {
  const [activeTab, setActiveTab] = useState('First tab');

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
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

export default BarChartComponent;
