import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom"

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

    const handleLogout = ()=>{
        localStorage.removeItem('token')
        history("/")
      }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        
    )
}

export default Dashboard