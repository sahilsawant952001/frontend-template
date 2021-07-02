import { configureStore } from "@reduxjs/toolkit";
import userSlice from './user';
import loadingSlice from './loading';


const store = configureStore({
    reducer : {
        user:userSlice,
        loading:loadingSlice
    }
});


export default store;