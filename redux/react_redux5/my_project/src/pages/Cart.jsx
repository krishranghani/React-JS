import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove_cart, empty_cart } from '../redux/ReduxCart/CartAction'

const Cart = () => {

  // const data1 = useSelector(state => state.cart)
  // const dispatch = useDispatch()

  // console.log('cartData', data1);

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log('cart data', cartItems);


  return (
    <div>
      <div>
        <button onClick={() => dispatch(empty_cart())} className="btn ml-5 rounded-full">
          Empty Cart
        </button>
      </div>
      <div className='flex justify-center items-center h-lvh text-center'>
        <table className='table-fixed w-[800px]'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Remove Cart</th>
            </tr>
          </thead>
          <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
                <tr className="border" key={`${item.id}-${index}`}>
                  {/* Combined id and index for unique key */}
                  <td>
                    <img
                      src={item.image}
                      alt="wishlistimage"
                      className="h-auto w-28"
                    />
                  </td>
                  <td className="">
                    <h2 className="text-wrap w-28 mx-auto">{item.title}</h2>
                  </td>
                  <td>
                    <p className="line-clamp-2">{item.description}</p>
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(remove_cart(item.id))}
                      className="btn"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Your wishlist is empty.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart
