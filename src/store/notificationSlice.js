import {createSlice} from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: "notification",
    initialState: {notification: {type:"sucess", message:"Notifiaction"}},
    reducers: {
        setNotification(state, action){
            state.notification = action.payload
        }
    }
})
 
export const notificationActions = notificationSlice.actions
export default notificationSlice