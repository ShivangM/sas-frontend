import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AttendanceTable from './AttendanceTable';
import Select from './Select';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadingActions } from '../../../../store/loadingSlice';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function AnalyseAttendanceTeachers() {
  const [value, onChange] = useState(new Date());
  const [teaches, setTeaches] = useState({});

  const attendanceData = useSelector(state => state.attendance.classStudents)
  const subject = useSelector(state => state.subject.classSubject)

  const strengthData = useSelector(state => state.attendance.strengthondate)

  // for (let index = 0; index < strengthData.length; index++) {
  //   strengthData[index].date = strengthData[index].date.substr(0,10)
  // }

  const dispatch = useDispatch()

  useEffect(async () => {
    const url = "https://sasietdavv-backend.herokuapp.com/api/data/getteaches";
    dispatch(loadingActions.setLoading({ loading: true, msg: "Loading..." }))
    const temp = await axios.post(url).catch(err => alert(err))
    setTeaches(temp.data)
    dispatch(loadingActions.setLoading({ loading: false, msg: "loading" }))
  }, []);

  const date = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;
  const rowClass = "mb-2 flex justify-between items-center"

  return (
    <div className="w-[100%] flex align-middle items-center flex-col overflow-y-scroll">
      <div className='text-center font-semibold text-3xl py-8'>Analyse Attendance</div>

      <div className="w-[90%] my-6 flex flex-col sm:flex-row justify-between">

        <div className="sm:w-[40%]">
          <Select title={"Select Class"} data={teaches} />
          {/* <div className="px-3">

            <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">Class Details: </label>
            <div className="mt-4">
              <div className={rowClass}>
                <span>Subject Code: </span>
                <span className="text-sm font-normal">{subject.subject_code}</span>
              </div>
              <div className={rowClass}>
                <span>Subject Name:</span>
                <span className="text-sm font-normal">{subject.subject_name}</span>
              </div>
              <div className={rowClass}>
                <span>Class Strength: </span>
                <span className="text-sm font-normal">{attendanceData.length}</span>
              </div>
            </div>

          </div> */}

          {/* <CalendarHeatmap
            startDate={new Date('2022-03-01')}
            endDate={new Date('2022-08-31')}
            showWeekdayLabels={true}
            values={strengthData}

            showOutOfRangeDays={true}

            classForValue={(value) => {
              if (!value) {
                return 'color-empty';
              }
              return `color-Present`;
            }}

            tooltipDataAttrs={(value) => {
              return {
                "data-tip": `${value.date} has student count: ${value.count}`
              };
            }}
          />
          <ReactTooltip /> */}

          <LineChart width={500} height={200} data={strengthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" interval="preserveEnd" />
            <YAxis interval="preserveEnd" />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>

        </div>

        <div className="md:w-[40%] flex flex-col  px-3 mt-6 md:mt-0">
          <label className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">
            Select Date
          </label>
          <Calendar onChange={onChange} value={value} />
        </div>

      </div>

      <div className="w-[90%] my-6 flex flex-col sm:flex-row justify-center">

      </div>

      <div className="w-[90%] my-6 flex flex-col sm:flex-row justify-around">
        <AttendanceTable date={date} />
      </div>

    </div>
  )
}

export default AnalyseAttendanceTeachers