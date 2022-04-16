import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AttendanceTable from './AttendanceTable';
import Select from './Select';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loadingActions } from '../../../../store/loadingSlice';

function FeedAttendance() {
  const [value, onChange] = useState(new Date());
  const [teaches, setTeaches] = useState({});
  const dispatch = useDispatch()

  useEffect(async () => {
    const url = "https://sasietdavv-backend.herokuapp.com/api/data/getteaches";
    dispatch(loadingActions.setLoading({ loading: true, msg: "Loading..." }))
    const temp = await axios.post(url).catch(err => alert(err))
    setTeaches(temp.data)
    dispatch(loadingActions.setLoading({ loading: false, msg: "loading" }))
  }, []);

  const date = `${value.getFullYear()}-${value.getMonth()+1}-${value.getDate()}`;

  return (
    <div className="w-[100%] flex align-middle items-center flex-col overflow-y-scroll">
      <div className='text-center font-semibold text-3xl py-8'>Feed Attendance</div>

      <div className="w-[90%] my-6 flex flex-col sm:flex-row justify-between">

        <div className="sm:w-[40%]">
          <Select title={"Select Class"} data={teaches} />
          <div className="px-3">

            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Class Details: </label>
          </div>
        </div>

        <div className="sm:w-[40%] flex flex-col  px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Select Date
          </label>
          <Calendar onChange={onChange} value={value} />
        </div>

      </div>

      <div className="w-[90%] my-6 flex flex-col sm:flex-row justify-around">
        <AttendanceTable date={date}/>
      </div>

    </div>
  )
}

export default FeedAttendance