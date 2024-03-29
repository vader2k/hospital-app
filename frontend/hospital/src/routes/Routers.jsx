import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Doctors from '../pages/Doctors/Doctors'
import Contact from '../pages/Contact'
import DoctorsDetails from '../pages/Doctors/DoctorsDetails'

import { Routes, Route } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

const Routers = () => {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:id' element={<DoctorsDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>  
    </>  
  )
}

export default Routers