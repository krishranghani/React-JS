import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { add_to_cart , remove_to_cart , empty_cart } from '../redux/ReduxCart/CartAction'
// import { add_to_wishlist,remove_to_wishlist,empty_wishlist } from '../redux/ReduxWhishList/WhishlistAction'

const Home = () => {

  const productData = useSelector((state => state.cart))
  useDispatch,useSelector
  console.log('HomeData' , productData);
  
  // const productData2 = useSelector((state => state.wishlist))
  // useDispatch,useSelector
  // console.log('HomeData' , productData2);

  const dispatch = useDispatch()


  const product = {
    name:'iphone',
    color:'black',
    price:'60000'
  }

  return (
    <div>
      <h1>This is Home Page</h1>
      <button className='btn' onClick={() => dispatch(add_to_cart(product))}>addToCart</button>
      <button className='btn' onClick={() => dispatch(remove_to_cart(product))}>removeToCart</button>
      <button className='btn' onClick={() => dispatch(empty_cart())}>emptyCart</button>
      {/* <button className='btn' onClick={() => dispatch(add_to_wishlist(product))}>addTowishlist</button>
      <button className='btn' onClick={() => dispatch(remove_to_wishlist(product))}>removeTowishlist</button>
      <button className='btn' onClick={() => dispatch(empty_wishlist())}>emptywishlist</button> */}
    </div>
  )
}

export default Home