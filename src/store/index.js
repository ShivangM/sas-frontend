import {configureStore} from "@reduxjs/toolkit"
import attendaceSlice from "./attendanceSlice"
import navItemSlice from "./navItemSlice"
import userDataSlice from "./userDataSlice"
import subjectSlice from "./subjectSlice"

const store = configureStore({
    reducer: {
        userData: userDataSlice.reducer,
        navItem: navItemSlice.reducer,
        attendance: attendaceSlice.reducer,
        subject: subjectSlice.reducer,
    }
})

export default store