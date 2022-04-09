import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faCog,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import Avatar from 'react-avatar';
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

function SimpleSideNav() {

  const [mobileOpen, setMobileOpen] = useState(false)
  let history = useNavigate();

  let active = "flex justify-between no-underline w-full px-8 py-3 border-l-4 text-sm transition-colors duration-200 ease-in-out hover:text-blue-400 bg-blue-900 border-blue-400 cursor-pointer "
  let inactive = "flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-blue-400 cursor-pointer "
  
  const [activeElement, setActiveElement] = useState(0);

  let navClass =
    "w-72 max-w-full bg-blue-800 h-screen flex flex-col text-white fixed lg:absolute lg:sticky top-0 transition-transform transform duration-500 ease"
  if (mobileOpen) navClass += " translate-x-0"
  else navClass += " -translate-x-full lg:translate-x-0"

  const handleLogout = ()=>{
    localStorage.removeItem('token')
    history("/")
  }

  const userInfo = useSelector(state=> state.userData.userData)
  console.log(userInfo)

  return (
    <div className={navClass}>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="absolute right-0 transform translate-x-double top-0 mt-8 text-3xl text-blue-800 cursor-pointer lg:hidden"
      />
      <a href="/" className="no-underline block mt-6">
        <img
          src="https://mace.edu.in/assets/uploads/notification/logo@2x.png"
          className="w-40 mx-auto filter invert"
          alt="logo"
        />
      </a>
      <div className="flex-1 mt-8">
        <div className="mt-6">
          <div
            className= {activeElement===0? active:inactive}
            onClick={()=>{setActiveElement(0)}}
          >
            <div>
              <FontAwesomeIcon icon={faHome} className="mr-4" /> View Attendance
            </div>
          </div>

          <div
            className= {activeElement===1? active:inactive}
            onClick={()=>{setActiveElement(1)}}
          >
            <div>
              <FontAwesomeIcon icon={faHome} className="mr-4" /> Analyze Attendance
            </div>
          </div>
   
          <div
            className= {activeElement===2? active:inactive}
            onClick={()=>{setActiveElement(2)}}
          >
            <div>
              <FontAwesomeIcon icon={faCog} className="mr-4" /> Account Settings
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-8 py-6 items-center">
        <Avatar name={userInfo? userInfo.name : "Name"} size="50" round={true}/>
        <div className="flex-1 ml-4">
          <p className="font-medium leading-none">{userInfo? userInfo.name : "Name"}</p>
          <p
            className="no-underline text-xs text-gray-300 leading-none cursor-pointer mt-1"
            onClick={handleLogout}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  )
}

export default SimpleSideNav