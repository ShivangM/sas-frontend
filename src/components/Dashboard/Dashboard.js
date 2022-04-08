import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import SimpleSideNav from './SimpleSideNav';
import ViewAttendance from './Students/ViewAttendance';
// import axios from "axios"
// require('dotenv').config()

function Dashboard() {
    let history = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {

        }
        else {
            history("/")
        }
    }, [])

    return (
        <div className='w-screen flex'>
            <SimpleSideNav/>
            <ViewAttendance/>
        </div>
    )
}

export default Dashboard