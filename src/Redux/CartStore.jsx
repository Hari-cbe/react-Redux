import {createSlice} from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartQuantity:0,
        cartItems : []
    },
    reducers:{
        incrementCart : (state) =>{
            state.cartQuantity += 1
        },
        addItems : (state,action) =>{
            // state.cartItems.id += 1,
            // state.cartItems.item  += action.payload
            state.cartItems.push(action.payload)
        }
    }
    
})

export const {incrementCart,addItems} = cartSlice.actions;
export default cartSlice.reducer