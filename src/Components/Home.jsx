import React from 'react'
import {increment,decrement,incrementSecond,decrementSecond} from '../Redux/Counter';
import {useSelector,useDispatch} from 'react-redux';

export const Home = () => {
  const count= useSelector((state)=> state.counter.count)
  const secondCount = useSelector((state)=> state.counter.secondCount)
  const dispatch = useDispatch()

  return (
    <div>
 Counter: {count}
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      SecondCounter : {secondCount}
      <button onClick={()=>dispatch(incrementSecond())}>+</button>
      <button onClick={()=> dispatch(decrementSecond())}>-</button>
    </div>
  )
}
