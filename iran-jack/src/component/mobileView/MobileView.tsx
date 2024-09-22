'use client';
import React from 'react'
import Image from 'next/image';
import profile from '../../img/profile.png'
import bot from '../../img/Bot.svg'
import horizontal from '../../img/Horizontal.svg'
import Activity from '../../img/Activity.svg'
import Chat from '../../img/Chat.svg'
import Calender from '../../img/Calendar.svg'
import Teams from '../../img/Teams.svg'
import { useState } from "react";
import { PieChart, Pie, Cell } from 'recharts';
import { Box, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BarCharts = [
  { name: 'Jan', uv: 60 },
  { name: 'Feb', uv: 80 },
  { name: 'Mar', uv: 70 },
  { name: 'Apr', uv: 65 },
  { name: 'May', uv: 60 },
  { name: 'Jun', uv: 90 },
];



const data = [
  { name: 'Completed', value: 72 },
  { name: 'Remaining', value: 28 },
];

const COLORS = ['#14B8A6', '#E5E7EB'];

interface ChartProps {
    percentage: number;
  }



  function MobileView() {

    const [activeButton, setActiveButton] = useState('Tab 1');

    const [activeTimeRange, setActiveTimeRange] = useState('7 days');
    
    const [responsiveContainer, setResponsiveContainer] = useState('7 days');

    const [activeIcon, setActiveIcon] = useState<string>(''); 

    const icons = [
      { name: 'Activity', src: Activity },
      { name: 'Chat', src: Chat },
      { name: 'Teams', src: Teams },
      { name: 'Calendar', src: Calender },
      { name: 'More', src: horizontal },
    ];
  
    const handleClick = (name: string) => {
      setActiveIcon(name);
    };
  
    return (
      <div className="container lg:hidden px-2 flex flex-col pb-3 bg-white rounded-[10px] leading-10 text-justify">
        <div className="flex justify-between  py-4">
          <div className="flex items-center ml-4 mt-4">
            <Image src={profile} width={32} height={32} alt="profile" />
            <span className="ml-3 text-black">Van Arsdel</span>
          </div>
          <div className="flex items-center ml-4 mt-4">
            <Image src={bot} width={24} height={24} alt="bot" />
            <Image src={horizontal} width={24} height={24} alt="horizontal" className="ml-2" />
          </div>
        </div>
  
        <div className="flex flex-col items-center mt-4">
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <button
                className={`px-10 leading-5 tracking-tight text-gray-800 font-normal text-sm py-2 ${
                  activeButton === 'Tab 1' ? 'text-blue-600' : 'hover:text-blue-900'
                }`}
                onClick={() => setActiveButton('Tab 1')}
              >
                Tab 1
              </button>
              <div
                className={`border-b-2 ${
                  activeButton === 'Tab 1' ? 'border-blue-600' : 'border-transparent'
                } w-28 mt-1`}
              />
            </div>
  
            <div className="flex flex-col items-center">
              <button
                className={`px-10 leading-5 tracking-tight text-gray-800 font-normal text-sm py-2 ${
                  activeButton === 'Tab 2' ? 'text-blue-600' : 'hover:text-blue-900'
                }`}
                onClick={() => setActiveButton('Tab 2')}
              >
                Tab 2
              </button>
              <div
                className={`border-b-2 ${
                  activeButton === 'Tab 2' ? 'border-blue-600' : 'border-transparent'
                } w-28 mt-1`}
              />
            </div>
  
            <div className="flex flex-col items-center">
              <button
                className={`px-10 leading-5 tracking-tight text-gray-800 font-normal text-sm py-2 ${
                  activeButton === 'Tab 3' ? 'text-blue-600' : 'hover:text-blue-900'
                }`}
                onClick={() => setActiveButton('Tab 3')}
              >
                Tab 3
              </button>
              <div
                className={`border-b-2 ${
                  activeButton === 'Tab 3' ? 'border-blue-600' : 'border-transparent'
                } w-28 mt-1`}
              />
            </div>
          </div>
          <div className="border-b bg-gray-300" style={{ width: '393px', borderBottomWidth: '1px' }} />
        </div>
  
        <div className="flex justify-center py-20 mx-auto">
            <div
                className="bg-white border border-gray-300 p-6 rounded-lg w-[358px] mt-10"
                style={{ height: '280px', width: '358px', borderWidth: '1px' }}
            >
                <div className="flex justify-between items-center my-2 px-4">
                    <span className="text-slate-800 font-semibold text-base leading-5 tracking-tight text-left ml-4">
                        Chart 1
                    </span>
                    <Image src={horizontal} width={20} height={20} alt="horizontal" className="mr-4" />
                </div>

                <div className="flex justify-center mb-2">
                    <div className="flex space-x-3">
                        {['7 days', '30 days', '60 days'].map((label, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <button
                            className={`text-gray-500 font-semibold py-2 ${
                                activeTimeRange === label ? 'text-blue-600' : 'hover:text-blue-900'
                            }`}
                            onClick={() => setActiveTimeRange(label)}
                            >
                            {label}
                            </button>
                            <div
                            className={`border-b-2 ${
                                activeTimeRange === label ? 'border-blue-600' : 'border-transparent'
                            } w-16 mt-1`}
                            />
                        </div>
                        ))}
                    </div>
                </div>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Box position="relative" marginTop={2}>
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

                        <Typography
                            variant="h4"
                            sx={{
                                position: 'absolute',
                                top: '40%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: '#242424',
                            }}
                        >
                            72%
                        </Typography>
                        <Typography
                        variant="body2"
                        sx={{
                            position: 'absolute',
                            left: '210px',
                            bottom: '100px',
                            color: '#000',
                        }}
                        >
                            0
                        </Typography>
                        <Typography
                        variant="body2"
                        sx={{
                            position: 'absolute',
                            right: '210px',
                            bottom: '100px',
                            color: '#000',
                            }}
                        >
                            100
                        </Typography>
                    </Box>

                    <Typography
                    variant="body2"
                    color="primary"
                    sx={{
                        marginTop: '-60px !important', 
                        paddingRight: '20px !important', 
                        alignSelf: 'flex-end',
                    }}
                    >
                        View details
                    </Typography>

                </Box>
            </div>
        </div>

        <div className="flex justify-center py-20 mx-auto">
            <div
                className="bg-white border border-gray-300 p-6 rounded-lg w-[358px] mt-10"
                style={{ height: '318px', width: '358px', borderWidth: '1px' }}
            >
                <div className="flex justify-between items-center my-2 px-4">
                    <span className="text-slate-800 font-semibold text-base leading-5 tracking-tight text-left ml-4">
                        Chart 2
                    </span>
                    <Image src={horizontal} width={20} height={20} alt="horizontal" className="mr-4" />
                </div>

                <div className="flex justify-center mb-2">
                    <div className="flex space-x-3">
                        {['7 days', '30 days', '60 days'].map((label, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <button
                            className={`text-gray-500 font-semibold py-2 ${
                                responsiveContainer === label ? 'text-blue-600' : 'hover:text-blue-900'
                            }`}
                            onClick={() => setResponsiveContainer(label)}
                            >
                            {label}
                            </button>
                            <div
                            className={`border-b-2 ${
                                responsiveContainer === label ? 'border-blue-600' : 'border-transparent'
                            } w-16 mt-1`}
                            />
                        </div>
                        ))}
                    </div>
                </div>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    sx={{
                        mt: 2,
                    }}
                >
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={BarCharts} margin={{ top: 1, right: 50, left: 10, bottom: 50 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" label={{ position: 'insideBottom', offset: -5 }} />
                        <YAxis label={{  angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Bar dataKey="uv" fill={COLORS[0]} />
                        </BarChart>
                    </ResponsiveContainer>
      
                    <Typography
                        variant="body2"
                        color="primary"
                        sx={{
                        marginTop: '-20px',
                        paddingRight: '20px',
                        alignSelf: 'flex-end',
                        }}
                    >
                        View details
                    </Typography>
                </Box>
            </div>
        </div>

        <div className="border-t w-full py-4 mt-">
      <div className="flex justify-around mt-4">
        {icons.map((icon) => (
          <button
            key={icon.name}
            className="flex flex-col items-center focus:outline-none"
            onClick={() => handleClick(icon.name)} 
          >
            <Image
              src={icon.src}
              width={32}
              height={32}
              alt={icon.name}
              className={activeIcon === icon.name ? 'filter invert-28 sepia-20 text-blue-600 saturate-100 hue-rotate-176 brightness-90 contrast-103' : 'text-gray-600'} 
            />
            <span
              className={`text-sm mt-1 ${
                activeIcon === icon.name ? 'text-blue-600' : 'text-gray-600'
              }`} 
            >
              {icon.name}
            </span>
          </button>
        ))}
      </div>
    </div>




      </div>
    );
  }
  
  export default MobileView;
  

