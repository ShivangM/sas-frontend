import React from 'react';
import { useSelector } from 'react-redux';
import SubjectAnalysis from './SubjectAnalysis';
import SubjectsTable from './SubjectsTable'

function AnalyseAttendance() {

    // const subjects = useSelector(state=> state.subjects.subjects)

    return (
        <div className="w-full flex align-middle items-center flex-col overflow-y-scroll">
            <div className='text-center font-semibold text-3xl py-8'>Analyse Attendance</div>

            <div className="w-[90%] my-6">
                <h1 className='py-3 text-lg font-semibold'>Your Subjects: </h1>
                <SubjectsTable />
            </div>

            <div className="w-[90%] my-6">
            <h1 className='py-3 text-lg font-semibold'>Subject 1: </h1>
                <SubjectAnalysis/>
            </div>

            <div className="w-[90%] my-6">
            <h1 className='py-3 text-lg font-semibold'>Subject 2: </h1>
                <SubjectAnalysis/>
            </div>
        </div>
    )
}

export default AnalyseAttendance