import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import item1 from '../assets/watch1.jpeg'
import item2 from '../assets/watch2.jpeg'
import item3 from '../assets/watch3.jpeg'
import item4 from '../assets/mobile1.jpeg'
import item5 from '../assets/mobile2.jpeg'
import item6 from '../assets/mobile3.jpg'
import item7 from '../assets/mobile4.jpeg'
import item8 from '../assets/tv1.jpeg'
import item9 from '../assets/tv2.jpeg'
import item10 from '../assets/mix1.jpeg'
import { useState, useEffect } from 'react'

const List_Rendering = () => {

  const [productData, setProductData] = useState([])
  const [selectCategory, setSelectCategory] = useState('all');

  console.log('product data', productData);


  const Product = [
    {
      id: 1,
      name: 'firebolt',
      price: 1000,
      dis: '10%',
      color: 'black',
      catagories: 'watch',
      img: item1
    },
    {
      id: 2,
      name: 'firebolt-fire',
      price: 10000,
      dis: '50%',
      color: 'black',
      catagories: 'watch',
      img: item2
    },
    {
      id: 3,
      name: 'samsung',
      price: 20000,
      dis: '10%',
      color: 'magicgray',
      catagories: 'watch',
      img: item3
    },
    {
      id: 4,
      name: 'xiomi',
      price: 10000,
      dis: '10%',
      color: 'white',
      catagories: 'mobile',
      img: item4
    },
    {
      id: 5,
      name: 'iphone15',
      price: 100000,
      dis: '10%',
      color: 'magicgreen',
      catagories: 'mobile',
      img: item5
    },
    {
      id: 6,
      name: 'oppo',
      price: 30000,
      dis: '10%',
      color: 'red',
      catagories: 'mobile',
      img: item6
    },
    {
      id: 7,
      name: 'oneplus',
      price: 50000,
      dis: '10%',
      color: 'slategray',
      catagories: 'mobile',
      img: item7
    },
    {
      id: 8,
      name: 'vu',
      price: 10000,
      dis: '10%',
      color: 'black',
      catagories: 'television',
      img: item8
    },
    {
      id: 9,
      name: 'sony',
      price: 50000,
      dis: '10%',
      color: 'gold',
      catagories: 'television',
      img: item9
    },
    {
      id: 10,
      name: 'bajaj',
      price: 10000,
      dis: '10%',
      color: 'black',
      catagories: 'mixer',
      img: item10
    }

  ]

  const ProductFilter = Product.filter((item) => item.catagories === 'watch')

  console.log(ProductFilter);

  useEffect(() => {
    setProductData(Product)
  }, [])

  const handleCategoryChange = (catagories) => {
    setSelectCategory(catagories);
  }


  
  const filterProducts = Product.filter(product =>
    (selectCategory === "all" || product.catagories === selectCategory) 
//     product.price >= selectPrice[0] &&
//     product.price <= selectPrice[1]
);

// console.log(selectPrice[0])
// console.log(selectPrice[1])

  return (
    <div>
      <h1 className='text-center bg-purple-600 p-2'>This is List-Rendering in React</h1>
      <div className='flex justify-center space-x-4 mb-4'>
        <button className='bg-blue-400 px-4 py-2 text-white rounded' onClick={() => handleCategoryChange('all')}>All</button>
        <button className='bg-blue-400 px-4 py-2 text-white rounded' onClick={() => handleCategoryChange("watch")}>watch</button>
        <button className='bg-blue-400 px-4 py-2 text-white rounded' onClick={() => handleCategoryChange("mobile")}>mobile</button>
      </div>

      {/* <button onClick={data}>Click For Data</button> */}
      <div className='flex flex-wrap justify-between'>

        {
          filterProducts.map((product) => {
            return (
              <div className="w-[300px] rounded-md border" key={product.id}>
                <img
                  src={product.img}
                  alt="Laptop"
                  className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                  <h1 className="inline-flex items-center text-lg font-semibold">
                    {product.name} &nbsp; <ArrowUpRight className="h-4 w-4" />
                  </h1>
                  <p className="mt-3 text-sm text-gray-600">
                    Rs.{product.price}
                  </p>
                  <div className="mt-4">
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #Macbook
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #Apple
                    </span>
                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                      #Laptop
                    </span>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Read
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>



    </div>
  )
}

export default List_Rendering