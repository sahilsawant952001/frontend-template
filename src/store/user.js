import { createSlice} from "@reduxjs/toolkit";

const initialUserState = {
                            isAuthenticated:false,
                            email:null,
                            token:null
                         }


const userSlice = createSlice({
    name:"user",
    initialState:initialUserState,
    reducers:{
        login(state,action){
            state.isAuthenticated = true;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        logout(state){
            state.isAuthenticated = false;
            state.email = null;
            state.token = null;
        }
    }
}) 

export const userActions = userSlice.actions;

export default userSlice.reducer;