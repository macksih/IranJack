import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const radialData = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
  { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
];

const RadialChartComponent = () => {
  return (
    <Box sx={{ width: '100%', padding: 2}}>
      <ResponsiveContainer width="100%" height={200}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={10} data={radialData}>
          <RadialBar label={{ fill: '#666', position: 'insideStart' }} background dataKey="uv" />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
        </RadialBarChart>
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

export default RadialChartComponent;
