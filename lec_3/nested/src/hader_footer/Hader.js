import React from 'react'

function Hader() {
  return (
    <div>
      <nav className="flex justify-between items-center p-6 bg-black">
        <div className="text-2xl font-bold text-white">WATCH.ME</div>
        <div className="space-x-6 text-lg">
          <a href="#" className="text-white">HOME</a>
          <a href="#" className="text-white">WATCH</a>
          <a href="#" className="text-white">PRODUCT</a>
          <a href="#" className="text-white">CONTACT</a>
          <a href="#" className="text-white">CAREER</a>
        </div>
      </nav>
      <div className="w-2/3 p-8">
            <div className="flex flex-col h-full text-center">
                <h1 className="text-5xl font-bold text-yellow-500 ml-80">I'M krish ranghani.</h1>
                <h2 className="text-3xl font-bold mt-2 ml-72">WEB DESIGNER</h2>
                <p className="mt-4 text-lg text-center ml-72">
I'm a Tunisian based web designer & front-end developer focused oncrafting 
clean & user-friendly experiences, I am passionate about building 
excellent software that improves the lives of those around me.
                </p>
            </div>
        </div>


    </div>
  )
}

export default Hader
