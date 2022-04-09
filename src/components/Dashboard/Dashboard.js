import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom"
import SimpleSideNav from './SimpleSideNav';
import ViewAttendance from './Students/ViewAttendance';
import axios from "axios"
import {useDispatch} from "react-redux"
import { userDataActions } from '../../store/userDataSlice';

function Dashboard() {
    let history = useNavigate();
    const dispatch = useDispatch()

    axios.interceptors.request.use(function (config) {
        config.headers.authToken = localStorage.getItem('token');
        return config;
    });

    useEffect(() => {
        if (localStorage.getItem('token')) {

            const getUser = async ()=>{
                const url = "https://sasietdavv-backend.herokuapp.com/api/auth/getuser";
                const userData = await axios.post(url).catch(err=> alert(err))
                dispatch(userDataActions.setUserData(userData.data[0]))
            }

            getUser()
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