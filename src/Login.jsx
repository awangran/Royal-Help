import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { cyan } from '@mui/material/colors'





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


function Login() {
  navigate = useNavigate()
    return (
      <body>
         <div id="errorBox" className="error-box rounded-lg">
            <img src="assets/warning.png" className="warning"></img>
            <p id="errorMsg" className="error">Invalid. Please try again.</p>
          </div>
      <div className="center" className="h-screen flex flex-col items-center justify-center">
        <p className="title">Royal Home</p>
       
        <div className="mx-6">
        <p className="text1"> Email</p>
        <input type="text" name="name" className="input mt-4" />

        <p className="text1 mt-5">Password</p>
        <input type="text" name="password" className="input mt-4" />
        </div>
        


        <button className="btn-1 py-1 px-5 rounded-full my-5" onClick={login}>Log In</button>

         <Link className="smallText decoration-wavy" to='/signup'>New? Create an account</Link>

      </div>
        </body>
    )
}

export default function SignUp() {
  return(
    <div className="center" class="h-screen flex flex-col items-center justify-center">
      <p className="text-5xl head mb-5">Sign Up</p>
      
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-1">
        <div>
          <p className="text2 mt-3 mx-5"> Name</p>
          <input type="text" name="name" className="input mt-4"/>

          <p className="text2 mt-6 mx-5">Class</p>
          <input type="text2" name="class" className="input mt-4"/>
        </div>

        <div>
          <p className="text2 mt-3 mx-5"> Email</p>
          <input type="text" name="email" className="input mt-4"/>

          <p className="text2 mt-6 mx-5"> Password</p>
          <input type="text" name="password" className="input mt-4"/>
        </div>
        

        <div>
          <p className="text-white my-3">Courses</p>
          
          <div id="scrollable">

          <FormGroup >
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Español" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Science" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Matemáticas" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="English" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="French" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Art" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Economía y Política" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Estadística y Geometría" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Ética" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Filosofía" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Física" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="ICT" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Lectura Crítica" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Lectores Competentes" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Medio Ambiente" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="P.E" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Química" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Religión" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Sociales" />
            <FormControlLabel control={<Checkbox sx={{color: cyan[500]}}/>} class="text-white bg-slate-500 rounded-full mb-2" label="Social Studies" />
            
              
            
          </FormGroup>
          </div>
         
        </div>

       

        
      </div>
      
       <button className="btn-1 py-1 px-5 rounded-full flex flex-col self-center items-center justify-center">Create Account</button>
      <Link className="smallText decoration-wavy" to='/dashboard'>dashboard</Link>
    </div>
  )
}
