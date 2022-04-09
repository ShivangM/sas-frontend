import {configureStore} from "@reduxjs/toolkit"
import navItemSlice from "./navItemSlice"
import userDataSlice from "./userDataSlice"

const store = configureStore({
    reducer: {
        userData: userDataSlice.reducer,
        navItem: navItemSlice.reducer
    }
})

export default store