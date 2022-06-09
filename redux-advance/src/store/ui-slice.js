import { createSlice } from "@reduxjs/toolkit";


const initialUIState={
    cartIsVisiable:false,
}
const uiSlice = createSlice({
    name:'ui',
    initialState:initialUIState,
    reducers:{
        toggle:(state)=>{
            state.cartIsVisiable=!state.cartIsVisiable
        }
    }
});

export const {toggle} = uiSlice.actions;
export default uiSlice;