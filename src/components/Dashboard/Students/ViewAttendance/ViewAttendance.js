import React, {useEffect} from 'react'
import StripedTable from './StripedTable'
import axios from "axios"
import {useDispatch} from "react-redux"
import { attendaceActions } from '../../../../store/attendanceSlice'
import { loadingActions } from '../../../../store/loadingSlice'

function ViewAttendance() {
    const dispatch = useDispatch()

    useEffect(() => {
        const getattendance = async ()=>{
            const url = "https://sasietdavv-backend.herokuapp.com/api/data/getattendance";
            dispatch(loadingActions.setLoading({ loading: true, msg: "Loading Attendance" }))
            const attendanceData = await axios.post(url).catch(err=> alert(err))
            dispatch(loadingActions.setLoading({ loading: false, msg: "loading" }))
            dispatch(attendaceActions.setAttendance(attendanceData.data))
        }

        getattendance()
    }, []);

    return (
        <div className="w-[100%] flex align-middle items-center flex-col overflow-y-scroll">
            <div className='text-center font-semibold text-3xl py-8'>View Attendance</div>
            <StripedTable />
        </div>
    )
}

export default ViewAttendance