import {createSlice} from "@reduxjs/toolkit"

const subjectSlice = createSlice({
    name: "subject",
    initialState: {subjectData: {}},
    reducers: {
        setSubjectData(state, action){
            state.subjectData = action.payload
        }
    }
})
 
export const subjectActions = subjectSlice.actions
export default subjectSlice