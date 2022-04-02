import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import SimpleSideNav from './SimpleSideNav';

function Dashboard() {
    let history = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            // console.log("cwhakuhkcw")
        }
        else {
            history("/")
        }
    }, [])

    return (
        <div>
            <SimpleSideNav/>
        </div>
        
    )
}

export default Dashboard