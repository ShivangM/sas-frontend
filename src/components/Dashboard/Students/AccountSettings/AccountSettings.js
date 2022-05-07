import React from 'react'
import { useSelector } from 'react-redux'

function AccountSettings() {

    const userData = useSelector(state=> state.userData.userData)
    console.log(userData)
    return (
        <div className="w-[100%] flex align-middle items-center flex-col">
            <div className='text-center font-semibold text-3xl py-8'>Account Settings</div>
        </div>
    )
}

export default AccountSettings