import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from './Select';

function FeedAttendance() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="w-[100%] flex align-middle items-center flex-col overflow-y-scroll">
      <div className='text-center font-semibold text-3xl py-8'>Feed Attendance</div>

      <div className="w-[90%] my-6 flex flex-col sm:flex-row justify-around">

        <div className="sm:w-[40%]">
          <Select title={"Select Semester"} data={["IT A", "IT B"]}/>
          <Select title={"Select Class"}/>
          <Select title={"Select Branch"}/>
          <Select title={"Select Section"}/>
        </div>

        <div className="sm:w-[40%] flex flex-col">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Select Date
          </label>
          <Calendar onChange={onChange} value={value} />
        </div>

      </div>
    </div>
  )
}

export default FeedAttendance