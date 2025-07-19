import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice'
import historyReducer from'../features/historySlice'
import selectedUserReducer from '../features/selectedUserSlice'
const store=configureStore({
    reducer:{
        user:userReducer,
        history:historyReducer,
        currentUser:selectedUserReducer
    }
})

export default store;