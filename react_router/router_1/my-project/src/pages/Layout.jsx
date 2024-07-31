import {BrowserRouter ,Routes , Route } from 'react-router-dom'
import Home from './Home'
import AboutUs from './Aboutus'
import Contact from './contact'
import Shop from './Shop'
import Navbar from '../Components/Navbar' 

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout