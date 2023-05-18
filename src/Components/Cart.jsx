import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {incrementCart,addItems} from '../Redux/CartStore'

export const Cart = () => {
    const cartItems = useSelector((state)=> state.cart.cartItems)
    const dispatch = useDispatch()
    const [item,setItem] = useState({id : 1 , items : ""})

    const submitCart = (e) => {
        e.preventDefault();
        dispatch(incrementCart())
        setItem({...item,id:item.id+1}) 
        dispatch(addItems(item))
    } 

    console.log(cartItems)
    return (
    <div>
        <form onSubmit={submitCart}>
            <input onChange={(e) => setItem({...item,items :e.target.value})} placeholder='Enter Product Name' type="text"/>
            <button type='submit'>Add Items</button>
        </form>

        <div>
            {cartItems.map((item)=>(
                <div key={item.id}>
                    <p>{item.items}</p>
                </div>
            ))
            }
        </div>
    </div>
  )
}
