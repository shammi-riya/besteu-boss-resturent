
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Pages/Shared/Navber/Navber'
import Footer from './Pages/Shared/Footer/Footer'

function App() {
 

  return (
    <>
    <Navber></Navber>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
