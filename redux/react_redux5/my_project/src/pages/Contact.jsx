import React, { useState, useEffect } from 'react';
// import img1 from '../assets/asset50.jpeg';
// import Footer2 from '../Components/Footer2';
// import Top from '../Components/Top';

const ContactPage = () => {

  return (
    <>
      <div className="bg-gray-100">
        {/* <header className="relative text-center">
          <img
            src={img1}
            alt="Ice Cream"
            className="w-full h-72 object-cover"
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500'>
            <h1 className="text-4xl font-bold text-black">Contact</h1>
            <a href="/" className="text-black ml-3">Home / <span className='text-blue-500'>Contact</span></a>
          </div>
        </header> */}

        <div className="container mx-auto w-full px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row w-full mt-8">
            <div className="lg:w-full rounded-lg mb-8 lg:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48796.31950590561!2d-0.1356394!3d51.5072685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b504f0a35c7%3A0x53b39e7e43ff5a1c!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1614592604864!5m2!1sen!2suk"
                width="100%"
                height="730"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md grid gap-4 lg:grid-cols-2">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold font-serif mb-4">Get In Touch</h2>
              <div className="grid gap-1 text-lg font-serif">
                <p>Rains HQ, Jens Olsens Vej 13, 8200 Aarhus N, Denmark</p>
                <p>(02) 6188 8062</p>
                <p>Jumysicecream@Gmail.Com</p>
              </div>
              <div className="mt-9 font-serif">
                <p>Open Hours:</p>
                <p>Contact Our Customer Happiness Team</p>
                <p>Monday-Friday 9am-5pm</p>
              </div>

              <div className="mt-8">
                <p className='font-semibold font-mono text-xl'>Follow us:</p>
                <a href="#" className="text-gray-500 hover:text-gray-900 mx-2 text-xl"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-500 hover:text-gray-900 mx-2 text-xl"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-500 hover:text-gray-900 mx-2 text-xl"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-gray-500 hover:text-gray-900 mx-2 text-xl"><i className="fab fa-behance"></i></a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <form className="grid gap-4">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                  <div className="grid gap-2">
                    {/* <label className="block text-gray-700">Your Name *</label> */}
                    <input type="text" placeholder='Your Name *' className="w-full px-3 py-2 border rounded-full focus:outline-none" />
                  </div>
                  <div className="grid gap-2">
                    {/* <label className="block text-gray-700">Your Email *</label> */}
                    <input type="email" placeholder='Your Email *' className="w-full px-3 py-2 border rounded-full focus:outline-none" />
                  </div>
                </div>
                <div className="grid gap-2">
                  {/* <label className="block text-gray-700">Number Phone *</label> */}
                  <input type="text" placeholder='Number Phone *' className="w-full px-3 py-2 border rounded-full focus:outline-none" />
                </div>
                <div className="grid gap-2">
                  {/* <label className="block text-gray-700">Comment or Message *</label> */}
                  <textarea placeholder='Comment or Message *' className="w-full h-40 px-3 py-2 border rounded-2xl focus:outline-none"></textarea>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
