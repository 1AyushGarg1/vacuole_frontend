import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<LandingPage />} />
        <Route path='/home' element = {<Home />} >
        </Route>
      </Routes>
    </>
  )
}

export default App
