import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  // ✅ Correct import
import './App.css'
import Start from './Pages/Start'
import Login from './Pages/Authentication/Login'
import Register from './Pages/Authentication/Register'
import ResetPassword from './Pages/ResetPassword'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import Home from './Pages/Home.jsx'
import Profile from './Pages/Profile.jsx'
import Watchlist from './Pages/WatchList.jsx'


function App() {

  return (
    <>

      <Routes>
        <Route path='/'  element={<Start/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/register'  element={<Register/>} />
        <Route path='/home'  element={<Home/>} />
        <Route path='/aboutus'  element={<AboutUs/>} />
        <Route path='/contact'  element={<ContactUs/>} />
        <Route path='/privacy'  element={<PrivacyPolicy/>} />
        <Route path='/profile'  element={<Profile/>} />
        <Route path='/watch-list'  element={<Watchlist/>} />
      </Routes>
      
    </>


  )
}

export default App
