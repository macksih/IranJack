import { Box, Typography } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = () => {
  return (
    <Box sx={{ width: '100%', padding: 2}}>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
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

export default PieChartComponent;
