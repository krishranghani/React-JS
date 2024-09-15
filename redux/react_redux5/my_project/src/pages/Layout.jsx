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
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/aboutus' element={<AboutUs/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/whishlist' element={<Whishlist/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
                <Route path='/*' element={<Page404/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout