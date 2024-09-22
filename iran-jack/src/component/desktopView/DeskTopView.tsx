'use client';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image'; 
import profile from '../../img/profile.png'; 
import Activity from '../../img/Activity.svg';  
import Apps from '../../img/Apps.svg'; 
import Arsdel from '../../img/Arsdel.svg'; 
import Calender from '../../img/Calendar.svg';
import Calls from '../../img/Calls.svg';
import Chat from '../../img/Chat.svg';
import Files from '../../img/Files.svg';
import Horizontal from '../../img/Horizontal.svg';
import Teams from '../../img/Teams.svg';
import Host from '../../img/Host.svg';
import Avatar from '../../img/Avatar.svg';
import Shape from '../../img/Shape.svg';
import TreeLines from '../../img/ThreeLines.svg';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Button, Typography } from '@mui/material';
import LineChartComponent from '../Charts/lineChart/LineChart'; 
import RadialChartComponent from '../Charts/radialData/RadiaData';  
import PieChartComponent from '../Charts/PieChart/PieChart';  
import BarChartComponent from '../Charts/pieData/PieData'; 
import SideBar from '../sideBar/sideBar'



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042' ,'#14B8A6', '#E5E7EB'];

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



interface ChartProps {
    percentage: number;
  }


const DesktopView = () => {

  const [activeTimeRange, setActiveTimeRange] = useState('Home');

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [activeTimeRangeChart, setActiveTimeRangeChart] = useState('7 days');
  
  const [responsiveContainer, setResponsiveContainer] = useState('7 days');

  const [activeIcon, setActiveIcon] = useState<string>(''); 

  const icons = [
    { name: 'Activity', src: Activity },
    { name: 'Chat', src: Chat },
    { name: 'Teams', src: Teams },
    { name: 'Calendar', src: Calender },
    { name: 'More', src: Horizontal },
  ];

  const handleClick = (name: string) => {
    setActiveIcon(name);
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // This will ensure rendering only happens on the client side.
  }, []);


  if (!isMounted) {
    // Return null or some placeholder if the component is not yet mounted
    return null;
  }


  return (
    <div className="container flex h-screen">
      <div className="flex flex-col bg-gray-100  w-28 p-4 items-center space-y-6 fixed top-0 left-0" style={{ height: '980px' }} >
        <div className="mb-4">
          <Image src={Host} width={24} height={24} alt="host" />
        </div>

        <div className="flex flex-col space-y-4 text-center justify-center items-center w-full"  >
          <div className="flex flex-col items-center">
            <Image src={Activity} width={24} height={24} alt="Activity" />
            <span className="text-sm text-gray-700">Activity</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src={Chat} width={24} height={24} alt="Chat" />
            <span className="text-sm text-gray-700">Chat</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src={Teams} width={24} height={24} alt="Teams" />
            <span className="text-sm text-gray-700">Teams</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src={Calender} width={24} height={24} alt="Calender" />
            <span className="text-sm text-gray-700">Calendar</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src={Calls} width={24} height={24} alt="Calls" />
            <span className="text-sm text-gray-700">Calls</span>
          </div>

          <div className="flex flex-col items-center">
            <Image src={Files} width={24} height={24} alt="Files" />
            <span className="text-sm text-gray-700">Files</span>
          </div>

          <div className="border-t border-gray-300 w-full mt-6 pt-4">
            <div className="flex flex-col items-center mt-4">
              <Image src={Arsdel} width={24} height={24} alt="Arsdel" />
              <span className="text-sm text-blue-600">Van Arsdel</span>
            </div>

            <div className="flex flex-col items-center mt-4">
              <Image src={Apps} width={24} height={24} alt="Apps" />
              <span className="text-sm text-gray-700">Apps</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow" >
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 shadow-md w-full" style={{ width: '1300px' , height: '68px' }}>
          <div className="flex items-center" />
          <div className="flex items-center space-x-3 mx-4">
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-md">
                <FaChevronLeft className="text-gray-600" />
              </button>
              <button className="p-2 rounded-md">
                <FaChevronRight className="text-gray-600" />
              </button>
            </div>
            <div className="flex-grow flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-md"
              style={{ width: '468px', height: '32px' }}
            />
          </div>
        </div>
          <div className="flex items-center space-x-4">
            <Image src={profile} width={32} height={32} alt="profile" />
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between" style={{ width: '1298px' }}>
            <div className="flex items-center space-x-4">
              <Image src={Avatar} width={32} height={32} alt="Avatar" className='mt-4 ml-5' />
              <span className='font-bold text-lg leading-6 text-slate-900 mt-4'>Van Arsdel</span>
              <div className="flex space-x-3 mt-5">
              {['Home', 'Timeline', 'Chat', 'Assigned to you'].map((label, index) => (
                <div key={index} className="flex flex-col items-center">
                <button
                  className={`text-gray-500 text-sm leading-5 font-semibold py-2 ${
                    activeTimeRange === label ? 'text-blue-600' : 'hover:text-blue-900'
                  }`}
                  onClick={() => setActiveTimeRange(label)}
                >
                  {label}
                </button>
                <div
                  className={`border-b-2 ${
                    activeTimeRange === label ? 'border-blue-600' : 'border-transparent'
                  } w-20 mt-1`}
                />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-5 mt-4 mr-5">
            <Image src={Shape} width={14} height={14} alt="Shape" />
            <Image src={Horizontal} width={14} height={14} alt="Horizontal" />
          </div>
        </div>
        <div className="mt-4" />
        <div className="border-b bg-gray-300" style={{ width: '1298px', borderBottomWidth: '1px' }} />
        <div className="flex flex-col items-start ml-5 my-4">
            <div className="flex items-center">
              <Image src={TreeLines} width={20} height={20} alt="TreeLines" className="mr-2" />
              <div className="flex flex-wrap">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="flex items-center mr-4 mb-4">
                    <input
                      type="checkbox"
                      className={`rounded-full h-5 w-5 text-blue-600 accent-blue-600 border border-gray-800 cursor-pointer ${
                        activeIndex === index ? 'bg-purple-200' : ''
                      }`}
                      style={{
                        appearance: 'none',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        border: '2px solid #d1d5db',
                        width: '20px',
                        height: '20px',
                      }}
                      onClick={() => setActiveIndex(index)} 
                    />
                    <span className="ml-2 text-slate-900 font-semibold text-sm leading-5">{`Text ${index + 1}`}</span>
                    {((index + 1) % 3 === 0 && index + 1 < 8) && (
                      <div className="border-l border-gray-300 h-8 ml-5" />
                    )}

                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className="border-b bg-gray-300" style={{ width: '1298px', borderBottomWidth: '1px' }} />
      </div>

      <div className="flex">
        <div className="ml-">
          <SideBar />
        </div>
        <div className="border-l border-gray-300 h-50 ml-" style={{ height: '856px' }} />
          <div className="flex flex-wrap justify-start py-20 mt-5 ml-">
            <div className="flex flex-wrap justify-start ml-4 w-full space-x-5">
              <div
                className="bg-white border border-gray-300 p-6 rounded-lg w-[358px] mt-0" 
                style={{ height: '400px', width: '281px', borderWidth: '1px' }}
              >
                <div className="flex justify-between items-center my-2 px-4">
                  <span className="text-slate-800 font-semibold text-base leading-5 tracking-tight text-left ml-4">
                    Chart 1
                  </span>
                  <Image src={Horizontal} width={20} height={20} alt="horizontal" className="mr-4" />
                </div>
                <div className="flex justify-center mb-2">
                  <div className="flex space-x-3">
                    {['7 days', '30 days', '60 days'].map((label, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <button
                          className={`text-gray-500 font-semibold py-2 ${
                          activeTimeRangeChart === label ? 'text-blue-600' : 'hover:text-blue-900'
                          }`}
                          onClick={() => setActiveTimeRangeChart(label)}
                        >
                          {label}
                        </button>
                        <div
                          className={`border-b-2 ${
                          activeTimeRangeChart === label ? 'border-blue-600' : 'border-transparent'
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
                              marginTop: '40px !important', 
                              marginLeft: '20px !important', 
                              alignSelf: 'flex-start',
                          }}
                          >
                              View details
                          </Typography>

                      </Box>
                  </div>
                  <div
                      className="bg-white border border-gray-300 p-6 rounded-lg w-[358px] mt-"
                      style={{ height: '400px', width: '281px', borderWidth: '1px' }}
                  >
                      <div className="flex justify-between items-center my-2 px-4">
                          <span className="text-slate-800 font-semibold text-base leading-5 tracking-tight text-left ml-4">
                              Chart 2
                          </span>
                          <Image src={Horizontal} width={20} height={20} alt="horizontal" className="mr-4" />
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
                              marginTop: '40px !important', 
                              marginLeft: '20px !important', 
                              alignSelf: 'flex-start',
                          }}
                          >
                              View details
                          </Typography>
                      </Box>
                  </div>
                  <div
                      className="bg-white border border-gray-300 p-6 rounded-lg "
                      style={{ height: '400px', width: '480px', borderWidth: '1px' }}
                  >
                      <div className="flex justify-between items-center my-2 px-4">
                          <span className="text-slate-800 font-semibold text-base leading-5 tracking-tight text-left ml-4">
                              Chart 3
                          </span>
                          <Image src={Horizontal} width={20} height={20} alt="horizontal" className="mr-4" />
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
                      <LineChartComponent /> 
                  </div>
                </div>


                <div className="flex flex-wrap justify-start ml-4 w-full space-x-5 mt-5">
                <div
                    className="bg-white border border-gray-300 p- 6 rounded-lg" 
                    style={{ height: '400px', width: '281px', borderWidth: '1px' }}
                  >
                      <div className="flex justify-between items-center my-2 px-4">
                          <span className="text-slate-800 font-semibold text-base leading-5 tracking-tight text-left ml-4">
                              Chart 4
                          </span>
                          <Image src={Horizontal} width={20} height={20} alt="horizontal" className="mr-4" />
                      </div>

                      <div className="flex justify-center mb-2">
                          <div className="flex space-x-3">
                              {['7 days', '30 days', '60 days'].map((label, index) => (
                              <div key={index} className="flex flex-col items-center">
                                  <button
                                  className={`text-gray-500 font-semibold py-2 ${
                                      activeTimeRangeChart === label ? 'text-blue-600' : 'hover:text-blue-900'
                                  }`}
                                  onClick={() => setActiveTimeRangeChart(label)}
                                  >
                                  {label}
                                  </button>
                                  <div
                                  className={`border-b-2 ${
                                      activeTimeRangeChart === label ? 'border-blue-600' : 'border-transparent'
                                  } w-16 mt-1`}
                                  />
                              </div>
                              ))}
                          </div>
                      </div>

                      <RadialChartComponent />
                  </div>
                  <div
                      className="bg-white border border-gray-300 p-6 rounded-lg"
                      style={{ height: '400px', width: '281px', borderWidth: '1px' }}
                  >
                      <div className="flex justify-between items-center my-2 px-4">
                          <span className="text-slate-800 font-semibold text-base leading-5 tracking-tight text-left ml-4">
                              Chart 5
                          </span>
                          <Image src={Horizontal} width={20} height={20} alt="horizontal" className="mr-4" />
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

                      <PieChartComponent /> 
                  </div>
                  <div
                      className="bg-white border border-gray-300 p-6 rounded-lg "
                      style={{ height: '400px', width: '480px', borderWidth: '1px' }}
                  >
                      <div className="flex justify-between items-center my-2 px-4">
                          <span className="text-slate-800 font-semibold text-base leading-5 tracking-tight text-left ml-4">
                              Chart 6
                          </span>
                          <Image src={Horizontal} width={20} height={20} alt="horizontal" className="mr-4" />
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

                      <BarChartComponent />
                  </div>
                </div>

              </div>


      </div>



      





      </div>
    </div>
  );
};

export default DesktopView;
