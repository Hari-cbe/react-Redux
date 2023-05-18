import './App.css'
import {createBrowserRouter,createRoutesFromElements,Route,Link, NavLink, RouterProvider,Navigate, redirect} from 'react-router-dom';
import { SecondScreen } from './Components/SecondScreen';
import { Home } from './Components/Home';

//Layouts
import { RootLayout } from './Layouts/RootLayout';
import { Cart } from './Components/Cart';
function App() {
 
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='ss' element={<SecondScreen/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Route>  
    )
  )

  return (
    <>
      <RouterProvider router={route} / >
      
    </>
  )
}

export default App
