import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'


export default class Landing extends React.Component {
  
  render() {

    return (
      <div>
          <div className="center">
            <p className="title">Royal Home</p>
            <Buttons/>
            
          </div>
        
      </div>
    );
  }
}

class Buttons extends React.Component{
  render() {
    return(
      <div className="center">
      <p className="tagline">Calcula tus notas para no tirarte el año</p>
        <button className="btn-1" onClick={login}>Log In</button>
        <button className="btn-1">Sign Up</button>
      </div>
    )
  }
}

class LogIn extends React.Component {

  render() {

    return(
      <div className="center">
        <p className="text1">Email</p>
        <input type="text" name="name" className="input"/>
        
        <p className="text1">Password</p>
        <input type="text" name="password" className="input"/>

       
        <button className="btn-1 marginup">Log In</button>
        
        <p className="smallText">Crea una cuenta</p>

      </div>
    )
  }
}
