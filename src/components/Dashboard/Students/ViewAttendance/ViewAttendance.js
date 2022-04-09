import React from 'react'
import StripedTable from './StripedTable'

function ViewAttendance() {

    const getattendance = async ()=>{
        const url = "https://sasietdavv-backend.herokuapp.com/api/data/getattendance";
        const attendanceData = await axios.post(url).catch(err=> alert(err))
        
    }

    return (
        <div className="w-[100%] flex align-middle items-center flex-col">
            <div className='text-center font-semibold text-3xl py-8'>View Attendance</div>
            <StripedTable />
        </div>
    )
}

export default ViewAttendance