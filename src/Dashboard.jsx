import React from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import Landing from './Landing'
import Login from './Login'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";


let navigate = null;

export default function Dashboard() {
  navigate = useNavigate()
  return (
    <body>
      <Nav/>
      <div class="mt-10 mx-10">
        <h1 class="text-5xl text-white font-light justify-start ">Home</h1>

        <div class="flex flex-col sm:flex-row">
          <div class="flex text-white font-light">
            <p class="mr-4 my-5 ">Name</p>
            <p class="mr-4 my-5 ">Grade</p>
            <div class="relative flex flex-row items-center">
                <select class="font-normal bg-violet-300/75	text-indigo-950 rounded-full h-7 w-30 pl-5 pr-5 hover:border-gray-400 focus:outline-none appearance-none sm:ml-5 bg-violet-300/75">
                    <option>Trimester 1</option>
                    <option>Trimester 2</option>
                    <option>Trimester 3</option>
                </select>
            </div>
          </div>
    
          <div class="flex items-center ml-auto">
            <div class="mx-10 flex flex-row align-middle items-center w-full">
              <div class="flex justify-end mb-1">
                <span class="text-lg font-medium text-blue-700 dark:text-white mr-2">Promedio</span>
              </div>
              <div class="bg-gray-200 rounded-full h-6 dark:bg-gray-700 w-32">
                <div class=" w-32 bg-cyan-300 h-6 rounded-full pl-3 text-violet-950" style={{width: '80%'}}>80%</div>
              </div>
            </div> 
          </div> 
        </div>
        
      </div>
      <Overview/>

      <div>
        <Courses/>
        <Report/>
      </div>
      
    </body>
  )
}

function Nav(){
  return(
      <nav class="bg-white border-bg-violet-300/75 dark:bg-violet-950/50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="./dashboard" ><p className="nav text-3xl hover:cursor-pointer text-cyan-300">Royal Home</p></a>

          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none dark:text-gray-400 dark:hover:bg-violet-950 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="#10CDD9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-violet-100 rounded-lg bg-violet-300/75 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-violet-300/75 md:dark:bg-transparent dark:border-violet-700">
              <li>
                <a href="#" class="block py-2 px-3 text-white  rounded md:bg-transparent md:text-violet-950 md:p-0 dark:text-white md:dark:text-cyan-300">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white  rounded md:bg-transparent md:text-violet-950 md:p-0 dark:text-white md:dark:text-cyan-300">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white  rounded md:bg-transparent md:text-violet-950 md:p-0 dark:text-white md:dark:text-cyan-300">Log Out</a>
              </li>
        
            </ul>
          </div>
        </div>
      </nav>
  )
}

function Overview(){
  return(
    <div>
    </div>
  )
}

function Courses(){
  return(
    <div>
      <div class="text-violet-950 bg-cyan-400 rounded-full px-7 py-1 w-44 mx-10 text-center">Classes</div>
    </div>
  )
}

function Report(){
  return(
    <div>
    </div>
  )
}