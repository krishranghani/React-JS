import Home from './Home'
import AboutUs from './Aboutus'
import Contact from './contact'
import Shop from './Shop'
import Navbar from '../Components/Navbar'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'

/* outlet */

const PageRouter = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/shop",
        element:<Shop/>
      }
    ]
  }
])

const Layout = () => {
  return (
    <div>
     <RouterProvider router={PageRouter}>
     </RouterProvider>
    </div>
  )
}

export default Layout