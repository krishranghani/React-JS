import React from 'react'

/* Conditional Rendering */

export function Item({check , name}){
    // if(check){
    //     return <li>{name}</li>
    // }
    // return <li><del>{name}</del></li>

    return check ? <li className='bg-gray-600 text-white my-2 rounded-2xl text-center items-center ml-96'>{name}</li> : null
}

const Conditional = () => {
  return (
    <div>
      <h1 className='p-4 bg-gray-500 text-white text-4xl rounded-2xl justify-center text-center ml-96'>React Conditional Rendering</h1>
      <ul className='mt-6'>
        <Item check={true} name='laptop'></Item>
        <Item check={true} name='mobile'></Item>
        <Item check={true} name='mouse'></Item>
        <Item check={true} name='pendrive'></Item>
        <Item check={true} name='harddisk'></Item>
        <Item check={false} name='keyboard'></Item>
      </ul>
    </div>
  )
}

export default Conditional;