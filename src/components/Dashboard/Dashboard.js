import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import SimpleSideNav from './SimpleSideNav';
import ViewAttendance from './Students/ViewAttendance/ViewAttendance';
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import { userDataActions } from '../../store/userDataSlice';
import AnalyseAttendance from './Students/AnalyseAttendance/AnalyseAttendance';
import AccountSettings from './Students/AccountSettings/AccountSettings';

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
    
    const active = useSelector(state=> state.navItem.number)

    const activeComponent = ()=>{
        switch (active) {
            case 0: return <ViewAttendance/>
            case 1: return <AnalyseAttendance/>
            case 2: return <AccountSettings/>
            default: return <ViewAttendance/>
        }
    }

    return (
        <div className='w-screen flex h-screen overflow-hidden'>
            <SimpleSideNav/>
            {activeComponent()}
        </div>
    )
}

export default Dashboard