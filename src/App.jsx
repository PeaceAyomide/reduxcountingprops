import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const App = () => {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type: 'INC'})
  }

  const decrease = () => {
    dispatch({type: 'DEC'})
    
  }
  
  const add = () => {
    dispatch({ type: 'ADD',payload: 100})
  }

  return (
    <div className='bg-black text-white
    h-screen flex flex-col justify-center items-center
    '>
      <h1 className='font-bold text-4xl mb-3'> Redux Counter App</h1>
      <h2 className='font-bold text-2xl mb-3'>{counter}</h2>
      <button className='bg-green-600 hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded mb-3' onClick={increase}>
Increase
      </button>
      <button className='bg-red-600 hover:bg-white hover:text-red-500 text-white font-bold py-2 px-4 rounded mb-3' onClick={decrease}>
Decrease
      </button>
      <button className='bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded' onClick={add}>Add by 100</button>
      
    </div>
  )
}

export default App