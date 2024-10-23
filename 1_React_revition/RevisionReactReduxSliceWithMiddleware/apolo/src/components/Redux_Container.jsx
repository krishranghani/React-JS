import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../reduxSlice/reduxSlice'


const Redux_Container = () => {

  const sliceDataCake = useSelector(state => state.count.NumOfCake)

  const sliceDataFruits = useSelector(state => state.count.NumOfFruits)

  console.log(sliceDataCake);
  console.log(sliceDataFruits);
  
  



  const dispatch = useDispatch()

  return (
    <div>
      <h1 className='heading'>This is React_redux </h1>
      <div>{sliceDataCake}</div>
      <div>{sliceDataFruits}</div>
      <button className='btn' onClick={() => dispatch(increment())}>Increment</button>
      <button className='btn' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Redux_Container
