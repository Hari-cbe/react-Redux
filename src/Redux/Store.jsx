import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './Counter';
import cartReducer from './CartStore'

export default configureStore({
    reducer : {
        counter : counterReducer,
        cart: cartReducer
    } 
})