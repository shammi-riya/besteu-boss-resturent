
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navber from './Pages/Shared/Navber/Navber'
import Footer from './Pages/Shared/Footer/Footer'

function App() {
  const location = useLocation()
  console.log(location);
  const isLocation = location.pathname.includes("login")||location.pathname.includes("sighinUp")

  return (
    <>
    {
      isLocation ||<Navber></Navber>
    }
    <Outlet></Outlet>
    {
      isLocation ||<Footer></Footer>
    }
    </>
  )
}

export default App
