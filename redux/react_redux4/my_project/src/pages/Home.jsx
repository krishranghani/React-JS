import {useEffect , useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { add_to_cart , remove_to_cart , empty_cart } from '../redux/reduxCart/CartAction'
// import { add_to_wishlist,remove_to_wishlist,empty_wishlist } from '../redux/ReduxWhishList/WhishlistAction'


const Home = () => {
  const [products, setProducts] = useState([]);

  //  USING TRY CATCH
  // const data = async() => {
  //   try{   
  //     let ecodata = await fetch('http://localhost:3000/ecomall')
  //     .then(ecodata => ecodata.json())
  //     .then(ecodata => console.log(ecodata))
  //     console.log(ecodata);
      
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }

  // data()

  // console.log('Home Data' , data);



  
  // Fetch data using Promises
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/ecomall')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); 
        })
        .then(data => {
          resolve(data); 
        })
        .catch(error => {
          reject(error); 
        
        });
    });
  };

  // promise 
  useEffect(() => {
    fetchData()
      .then(ecodata => {
        setProducts(ecodata); 
        // console.log('Fetched Data:', ecodata);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  console.log('Home Data:', products);

  const productData = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const product = {
    name: 'iphone',
    color: 'black',
    price: '60000',
  };


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