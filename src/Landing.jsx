import './App.css'
import React from 'react'
import Login from "./Login"
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";


export default function Landing() {
    return (
      <div>
        <div className="h-screen flex flex-col items-center justify-center">
          <p className="title">Royal Home</p>
            <p className="tagline">Calcula tus notas para no tirarte el año</p>
          <Link className="btn-1 py-1 px-5 rounded-full my-5 w-2/5 text-center" to='/login'>Log In</Link>
            <Link className="btn-1 py-1 px-5 rounded-full my-5 w-2/5 text-center" to='/signup'>Sign Up</Link>
          </div>
        </div>

    );
}

