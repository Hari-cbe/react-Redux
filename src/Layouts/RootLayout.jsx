import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink , Outlet} from 'react-router-dom'

export const RootLayout = () => {
    const cart = useSelector((state)=> state.cart.cartQuantity)
    return (
    <div>
        <header>
        <h1>Hello</h1>
        <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/ss'>Second Screen</NavLink>
            <NavLink to='cart'>Cart</NavLink>
            <div>
            Cart: {cart}
            </div>
        </nav>
        </header>
        <main>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam </p>
            <Outlet/>
        </main>
    </div>
  )
}
