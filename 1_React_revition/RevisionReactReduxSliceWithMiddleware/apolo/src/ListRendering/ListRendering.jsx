import React from 'react'

const ListRendering = () => {

    // const arrayOfProduct = ["Mobile" , "Television" , "Air Conditioner" , "Computer",  "Laptop"]

    const arrayObjectProduct = [
        {
            name:'Mobile',
            price:30000,
            color:'gray',
            brand:'oppo',
            isStock:false
        },
        {
            name:'Television',
            price:15000,
            color:'black',
            brand:'lg',
            isStock:true
        },
        {
            name:'Air Conditioner',
            price:35000,
            color:'white',
            brand:'voltas',
            isStock:true
        },
        {
            name:'Computer',
            price:50000,
            color:'blue',
            brand:'msi',
            isStock:false
        },
        {
            name:'Laptop',
            price:30000,
            color:'gray',
            brand:'lenovo',
            isStock:true
        }
    ]

    const filterProduct = arrayObjectProduct.filter((item) => item.isStock == true)


  return (
    <div>
      <h1 className='heading'>This is React List Rendering Concept</h1>
      <div className='flex flex-wrap justify-evenly'>
        {
            filterProduct.map((item) => {
                return(
                    <div className='p-2 bg-gray-500 border-2'>
                        <ul className='w-52'>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li>{item.color}</li>
                            <li>{item.brand}</li>
                        </ul>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ListRendering
