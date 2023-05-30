import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'


export default function Login() {

    return (
      <div className="center">
        <p className="text1">Email</p>
        <input type="text" name="name" className="input" />

        <p className="text1">Password</p>
        <input type="text" name="password" className="input" />


        <button className="btn-1 marginup">Log In</button>

        <p className="smallText">Crea una cuenta</p>

      </div>
    )
}
