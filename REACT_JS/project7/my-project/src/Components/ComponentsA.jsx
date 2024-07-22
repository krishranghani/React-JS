import React from 'react'
import ComponentsB from './ComponentsB'

const ComponentsA = () => {
  return (
    <div>
      <h1 className='heading'>This is Components A</h1>
      <ComponentsB/>
    </div>
  )
}

export default ComponentsA