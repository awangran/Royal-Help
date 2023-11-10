import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, useNavigate } from "react-router-dom";

let navigate = null;

function setCookie(key, value) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

async function login() {
  const user = {email: $('#email').get(0).value.toLowerCase(), password: CryptoJS.SHA256($('#password').get(0).value).toString()}
     let data = await superagent.post(BACKEND_URL + "/user").send(user)
 if (data.body == null) {
          $('#errorMsg').get(0).innerText = data.text
          return $('#errorBox').get(0).style.visibility = 'visible'
        } else if ($('#errorBox').get(0).style.visibility == 'visible') {
          $('#errorBox').get(0).style.visibility = 'hidden'
        }
  setCookie("key", data.body.password)
  navigate("/ ");
  
}

export default function Login() {
  navigate = useNavigate()
    return (
      <body>
         <div id="errorBox" className="error-box rounded-lg">
            <img src="assets/warning.png" class="warning"></img>
            <p id="errorMsg" class="error">Invalid. Please try again.</p>
          </div>
      <div className="center">
        <p className="text1">Email</p>
        <input type="text" name="name" className="input" />

        <p className="text1">Password</p>
        <input type="text" name="password" className="input" />


        <button className="btn-1 marginup" onClick={login}>Log In</button>

         <Link className="smallText" to='/signup'>Sign Up</Link>

      </div>
        </body>
    )
}
