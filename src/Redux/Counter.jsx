import {createSlice} from '@reduxjs/toolkit';



export const counterSlice =  createSlice({
    name:'counter',
    initialState:{
        count : 0,
        secondCount : 0
    },

    reducers:{
        increment:(state)=>{
            
            state.count += 1
        },
        decrement : (state)=>{
            state.count -= 1
        },
        incrementSecond:(state)=>{
            state.secondCount += 10
        },
        decrementSecond : (state)=>{
            state.secondCount -= 1
        }
    }
})

export const {increment,decrement,incrementSecond,decrementSecond} = counterSlice.actions;
export default counterSlice.reducer;