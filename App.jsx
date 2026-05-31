import React from 'react'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import Aboutus from './pages/Aboutus'
import Login from './pages/Login'
import Navbar from './pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
  const App = () => {
  return (
    <BrowserRouter>
    
      <Navbar />
      <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/aboutus' element={<Aboutus />}></Route>
       <Route path='/contactus' element={<Contactus />}></Route>
       <Route path='/login' element={<Login />}></Route>


    </Routes>
    </BrowserRouter>
  )
}
export default App