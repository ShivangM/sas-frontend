import React, { PureComponent } from 'react';
import SubjectsTable from './SubjectsTable'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function AnalyseAttendance() {
    const data = [
        { name: 'Present', value: 400 },
        { name: 'Absent', value: 300 },
    ];

    const COLORS = ['#0088FE', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };


        return (
            <div className="w-[100%] flex align-middle items-center flex-col">
                <div className='text-center font-semibold text-3xl py-8'>Analyse Attendance</div>
                <SubjectsTable />

                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        )
    }

    export default AnalyseAttendance