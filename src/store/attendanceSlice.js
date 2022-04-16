import {createSlice} from "@reduxjs/toolkit"

const attendaceSlice = createSlice({
    name: "attendance",
    initialState: {attendance: {}, classStudents: [{ roll_number: "rn", name: "name" }], attendanceList: []},
    reducers: {
        setAttendance(state, action){
            state.attendance = action.payload
        },

        setClassStudents(state, action){
            state.classStudents = action.payload
        },

        setAttendanceList(state, action){
            state.attendanceList = action.payload
        },
    }
})
 
export const attendaceActions = attendaceSlice.actions
export default attendaceSlice