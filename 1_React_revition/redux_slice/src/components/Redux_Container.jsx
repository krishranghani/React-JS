import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../reduxSlice/reduxSlice'


const Redux_Container = () => {

  const sliceData = useSelector(state => state.count.NumOfCake)

  console.log(sliceData);

  const dispatch = useDispatch()

  return (
    <div>
      <h1 className='heading'>This is React_redux </h1>
      <div>{sliceData}</div>
      <button className='btn' onClick={() => dispatch(increment())}>Increment</button>
      <button className='btn' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Redux_Container
