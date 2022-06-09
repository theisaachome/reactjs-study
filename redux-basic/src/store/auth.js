import { createSlice } from "@reduxjs/toolkit"
const initialAuthState = {
    isAuthenticated:false,
}
const authSlice=createSlice({
    name:"authentication",
    initialState:initialAuthState,
    reducers:{
        login:(state)=>{
            console.log(state.isAuthenticated);
            state.isAuthenticated=true
        },
        logout:(state)=>{
            console.log(state.isAuthenticated);
            state.isAuthenticated=false
        }
    }
})

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;