import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { typeActions } from '../store/typeSlice'
import { useNavigate } from "react-router-dom";

function Home() {
    const dispatch = useDispatch()
    const history = useNavigate()

    const setType = async (type)=>{
        dispatch(typeActions.setType(type))
        history("/login")
    }

    return (
        <div className='flex justify-center align-middle flex-col h-screen'>
            <img src="https://images.unsplash.com/photo-1516052016015-6c951fdad2d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="collage" className='-z-10 absolute opacity-80 object-cover h-screen w-screen'/>
            <h1 className='text-4xl text-center font-medium'>Student Attendance System</h1>
            <div className="buttons flex justify-center align-middle m-5">
                <a className='bg-black cursor-pointer text-white p-2 rounded-lg m-2' onClick={()=>{setType("student")}}>For Students</a>
                <a className='bg-black cursor-pointer text-white p-2 rounded-lg m-2' onClick={()=>{setType("teacher")}}>For Faculties</a>
            </div>
        </div>
    )
}

export default Home