import { createSlice} from "@reduxjs/toolkit";

const initialState = {
                        loading:false
                     }


const loadingSlice = createSlice({
    name:"loading",
    initialState:initialState,
    reducers:{
        startloading(state,action){
            state.loading = true;
        },
        stopLoading(state,action){
            state.loading = false;
        }
    }
}) 

export const loadingActions = loadingSlice.actions;

export default loadingSlice.reducer;