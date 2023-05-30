import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './Landing'
import Login from './Login'
import { useLocation, useRoutes, useNavigate } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </div >

  )
}

