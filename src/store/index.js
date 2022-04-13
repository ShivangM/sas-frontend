import {configureStore} from "@reduxjs/toolkit"
import attendaceSlice from "./attendanceSlice"
import navItemSlice from "./navItemSlice"
import userDataSlice from "./userDataSlice"
import subjectSlice from "./subjectSlice"
import loadingSlice from "./loadingSlice"
import typeSlice from "./typeSlice"

const store = configureStore({
    reducer: {
        userData: userDataSlice.reducer,
        navItem: navItemSlice.reducer,
        attendance: attendaceSlice.reducer,
        subject: subjectSlice.reducer,
        loading: loadingSlice.reducer,
        type: typeSlice.reducer
    }
})

export default store