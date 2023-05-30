import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";


export default function Login() {

    return (
      <div className="center">
        <p className="text1">Email</p>
        <input type="text" name="name" className="input" />

        <p className="text1">Password</p>
        <input type="text" name="password" className="input" />


        <button className="btn-1 marginup">Log In</button>

         <Link className="smallText" to='/signup'>Sign Up</Link>

      </div>
    )
}
