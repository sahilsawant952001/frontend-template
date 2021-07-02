import { createSlice} from "@reduxjs/toolkit";

const initialUserState = {
                            isAuthenticated:false,
                            email:null,
                            name:null,
                            surname:null,
                            token:null
                         }


const userSlice = createSlice({
    name:"user",
    initialState:initialUserState,
    reducers:{
        login(state,action){
            state.isAuthenticated = true;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        logout(state){
            state.isAuthenticated = false;
            state.name = null;
            state.surname = null;
            state.email = null;
            state.token = null;
        }
    }
}) 

export const userActions = userSlice.actions;

export default userSlice.reducer;