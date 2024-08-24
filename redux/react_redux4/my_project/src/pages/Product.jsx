import React, { useState, useEffect } from 'react';

const Product = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/map');
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    console.log(`Adding ${item.title} to cart`);
  };

  return (
    <div>
      <h1 className="text-5xl mt-4 text-center">This is the Product Page</h1>
      <div className="flex flex-wrap justify-center mt-8">
        {productData.length > 0 ? (
          productData.map((item, index) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white border-2"
              key={index}
            >
              {/* Image Section */}
              <img
                className="w-full h-64 object-cover"
                src={item.image}
                alt={item.title}
              />
              {/* Content Section */}
              <div className="px-6 py-4">
                <p className="font-serif text-gray-700 text-base">ID: {item.id}</p>
                <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                <p className="text-gray-700 text-base">Description: {item.description}</p>
                <p className="bg-black text-white inline-block rounded-lg px-3 py-1 mt-4">
                  Price: ${item.price}
                </p>
                {/* Add to Cart Button */}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="font-serif text-5xl text-center mt-28">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Product;
