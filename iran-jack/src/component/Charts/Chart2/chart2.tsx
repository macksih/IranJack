// Chart2Component.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const barData = [
  { name: 'S', uv: 4000 },
  { name: 'M', uv: 3000 },
  { name: 'L', uv: 2000 },
];

const Chart2Component = () => {
  return (
    <Box
      className="bg-white border border-gray-300 p-6 rounded-lg w-[358px]"
      style={{ height: '400px', width: '281px', borderWidth: '1px' }}
    >
      <div className="flex justify-between items-center my-2 px-4">
        <span className="text-slate-800 font-semibold text-base leading-5 tracking-tight text-left ml-4">
          Chart 2
        </span>
        <span className="text-slate-800 font-semibold text-sm leading-5 tracking-tight text-left ml-4">
        Description
        </span>
        <img src="/path-to-horizontal-image" width={20} height={20} alt="horizontal" className="mr-4" />
      </div>

      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>

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

export default Chart2Component;
