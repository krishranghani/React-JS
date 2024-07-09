import React from 'react'

const Card = (props) => {
  return (

     <div className='transition duration-500 w-80 rounded-xl shadow-lg m-5 hover:animate-pulse '>
        <img src={props.image} alt="" className='object-cover w-80 h-80 rounded-t-xl' />
        <div className='px-4 py-3 w-80'>
            <p className=' text-gray-400 mr-3 uppercase text-xs'>{props.brand}</p>
            <p className='text-lg truncate font-bold '>{props.proname}</p>
            <div className='flex items-center'>
               <p className=' font-semibold my-3 text-lg'>{props.curPrice}</p>
               <del className='text-sm ml-2 font-semibold text-gray-600'>{props.delPrice}</del>
               <i class="fa-solid fa-cart-shopping ml-44"></i>
            </div>
        </div>
     </div>
  )
}

export default Card







// import React from 'react'

// const Card = (Props) => {
//   return (
//     <div>
//     <h1 style={{ color : 'red'}}> card name is  {Props.name}</h1>
//     <h2> card price is {Props.price}</h2>
      
//     </div>
//   )
// }

// export default Card
