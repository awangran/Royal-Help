import './App.css'
import React from 'react'
import Login from "./Login"
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";


export default function Landing() {
    return (
      <div>
        <div className="center">
          <p className="title">Royal Home</p>
          <Buttons />

        </div>

      </div>
    );
}

function Buttons() {
    return (
      <div className="center">
        <p className="tagline">Calcula tus notas para no tirarte el año</p>
      <Link className="btn-1" to='/login'>Log In</Link>
        <Link className="btn-1" to='/signup'>Sign Up</Link>
      </div>
    )
}
