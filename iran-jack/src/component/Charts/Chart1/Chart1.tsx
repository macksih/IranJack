// Chart1Component.jsx
import { PieChart, Pie, Cell } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F'];

const Chart1Component = () => {
  return (
    <Box
      className="bg-white border border-gray-300 p-6 rounded-lg w-[358px]"
      style={{ height: '400px', width: '281px', borderWidth: '1px' }}
    >
      <div className="flex justify-between items-center my-2 px-4">
        <span className="text-slate-800 font-semibold text-base leading-5 tracking-tight text-left ml-4">
          Chart 1
        </span>
        <img src="/path-to-horizontal-image" width={20} height={20} alt="horizontal" className="mr-4" />
      </div>

      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <Typography variant="h4" sx={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          72%
        </Typography>
      </Box>
      <Typography variant="body2" color="primary" sx={{ marginTop: '-60px', paddingRight: '20px', alignSelf: 'flex-end' }}>
        View details
      </Typography>
    </Box>
  );
};

export default Chart1Component;
