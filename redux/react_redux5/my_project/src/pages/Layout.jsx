import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Whishlist from './Whishlist'
import AboutUs from './AboutUs'
import Cart from './Cart'
import Product from './Product'
import Login from './Login'
import Profile from './Profile'
import Page404 from './Error404Page'
import { Navbar } from '../components/Navbar';
import RequireAuth from "../Utils/RequireAuth";
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const PageRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />, // Navbar will always be visible
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product",
        element: <RequireAuth><Product /></RequireAuth>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/whishlist",
        element: <Wishlist />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/page404",
        element: <Error404 />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);

const Layout = () => {
  return <RouterProvider router={PageRouter} />;
};

export default Layout;


// const Layout = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />}></Route>
//           <Route path='/aboutus' element={<AboutUs />}></Route>
//           <Route path='/Contact' element={<Contact />}></Route>
//           <Route path='/whishlist' element={<Whishlist />}></Route>
//           <Route path='/cart' element={<Cart />}></Route>
//           <Route path='/product' element={<Product />}></Route>
//           <Route path='/login' element={<Login />}></Route>
//           <Route path='/profile' element={<Profile />}></Route>
//           <Route path='/*' element={<Page404 />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default Layout