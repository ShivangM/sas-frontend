import React from 'react'

function Home() {
    return (
        <div className='flex justify-center align-middle flex-col h-screen'>
            <h1 className='text-4xl text-center'>Student Attendance System</h1>
            <div className="buttons flex justify-center align-middle m-5">
                <button className='bg-blue-400 p-2 rounded-lg m-2'><a href="/login">For Student</a></button>
                <button className='bg-blue-400 p-2 rounded-lg m-2'><a href="/faculty">For Faculties</a></button>
            </div>
        </div>
    )
}

export default Home