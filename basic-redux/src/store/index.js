
import { createSlice,configureStore } from "@reduxjs/toolkit"
const initialState = {
    counter: 0,
    showCounter: true,
}

const counterSlice =createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter++
        },
        decrement:(state)=>{
            state.counter--
        },
        increase:(state,action)=>{
            state.counter= state.counter+action.amount
        },
        toggleCounter:(state)=>{
            state.showCounter=!state.showCounter
        },
    }
})
export const {increment,decrement,increase,toggleCounter} = counterSlice.actions;
const store = configureStore({
    reducer:counterSlice
});

export default store;