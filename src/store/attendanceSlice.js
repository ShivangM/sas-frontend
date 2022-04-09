import {createSlice} from "@reduxjs/toolkit"

const attendaceSlice = createSlice({
    name: "attendance",
    initialState: {attendance: {}},
    reducers: {
        setAttendance(state, action){
            state.attendance = action.payload
        }
    }
})
 
export const attendaceActions = attendaceSlice.actions
export default attendaceSlice