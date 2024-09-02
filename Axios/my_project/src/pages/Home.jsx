import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Star, ChevronDown } from 'lucide-react'

const Home = () => {

  const [data, setData] = useState([])

  console.log()

  useEffect(() => {
    axios.get('http://localhost:3000/ecomall')
      .then((response) => {
        console.log(response);
        setData(response.data)
      })
  }, [])

  return (
    <div>
      <h1>This is Home Page</h1>
      <div className='grid grid-cols-2'>
        {
          data.map((item) => {
            return (
              <>
                <section className="overflow-hidden">
                  <div className="mx-auto max-w-5xl px-5 py-24">
                    <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                      <img
                        alt="Nike Air Max 21A"
                        className="h-32 w-[50%] rounded object-contain lg:h-72 lg:w-1/2"
                        src={item.image}
                      />
                      <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                        <h3 className="my-4 text-3xl font-semibold text-black">{item.title}</h3>
                        <div className="my-4 flex items-center">
                        </div>
                        <p className="leading-relaxed">
                          {item.description}
                        </p>
                        <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                          <div className="flex items-center">
                            <span className="mr-3 text-sm font-semibold">Color</span>
                            <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                            <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                            <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="title-font text-xl font-bold text-gray-900">${item.price}</span>
                          <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
