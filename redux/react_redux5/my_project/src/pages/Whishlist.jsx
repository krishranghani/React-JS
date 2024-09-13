import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove_wishlist, empty_wishlist , wishlist_to_cart } from '../redux/ReduxWhishList/WhishlistAction';

const Wishlist = () => {

  const data2 = useSelector(state => state.whishlist)
  const dispatch = useDispatch()

  console.log('whishlist data', data2);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(empty_wishlist())} className="btn ml-5 rounded-full">
          Empty Wishlist
        </button>
      </div>
      <div className='flex justify-center items-center h-lvh text-center'>
        <table className='table-fixed mt-20 w-[800px]'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Remove Cart</th>
            </tr>
          </thead>
          <tbody>
            {
              data2.map((item, index) => {
                return (
                  <tr className='border' key={`${item.id}-${index}`}> {/* Combined id and index for unique key */}
                    <td>
                      <img src={item.image} alt="wishlistimage" className='h-auto w-28' />
                    </td>
                    <td className=''>
                      <h2 className='text-wrap w-28 mx-auto'>{item.title}</h2>
                    </td>
                    <td>
                      <p className='line-clamp-2'>${item.description}</p>
                    </td>
                    <td>
                      <button onClick={() => dispatch(remove_wishlist(item.id))} className='btn'>Remove</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Wishlist
