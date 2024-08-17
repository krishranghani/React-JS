import React, { useState, useEffect } from 'react';

const product = () => {
  const [blogData, setBlogData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/map');
      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-5xl text-center mt-5'>This is Blog Page</h1>
      <div>
        {blogData.length > 0 ? (
          blogData.map((item, index) => (
            <div className='border-2' key={index}>
              <p>{item.id}</p>
              <h2 className='font-bold'>{item.title}</h2>
              <p>description = {item.description}</p>
              <p>price ={item.price}$</p>
              <br />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default product;