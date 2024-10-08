import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_cart } from "../redux/ReduxCart/CartAction";
import { add_wishlist } from "../redux/ReduxWhishList/WhishlistAction";
import axios from "axios";
import { useState, useEffect } from "react";

const product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/ecomall").then((res) => {
      setProduct(res.data);
    });
  }, []);

  const dispatch = useDispatch();

  return (
    <div>

      <div className="flex flex-wrap justify-center mt-5 gap-2">
        {product.map((item) => {
          return (
            <div key={item.id}>
              <div className="w-[300px] h-[400px] rounded-md border shadow-md flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[200px] w-full object-cover rounded-t-md"
                />
                <div className="p-4 flex-grow">
                  <h1 className="text-lg font-semibold line-clamp-1">
                    {item.title}
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between p-4">
                  <button
                    onClick={() => dispatch(add_cart(item))}
                    type="button"
                    className="px-4 py-2 rounded-full bg-gray-800 text-white"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={() => dispatch(add_wishlist(item))}
                    type="button"
                    className="px-8 py-2 rounded-full bg-gray-800 text-white"
                  >
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default product;