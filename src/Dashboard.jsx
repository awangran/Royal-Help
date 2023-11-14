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

      <div class="flex flex-row">
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
    <div class="flex flex-col justify-center items-center md:items-start align-middle mt-3 mx-10 w-44">
      <div class="text-violet-950 bg-cyan-400 rounded-full px-7 py-1 w-44  text-center my-3">Classes</div>

      <div class="flex flex-col items-start justify-start bg-cyan-700 p-3  w-44 rounded-lg text-violet-950">
        <button class="rounded-lg bg-white focus:bg-cyan-300 px-5 py-1 text-left w-full hover:bg-cyan-200 duration-300 my-2">Sociales</button>
        <button class="rounded-lg bg-white focus:bg-cyan-300 px-5 py-1 text-left w-full hover:bg-cyan-200 duration-300 my-2">Science</button>
        <button class="rounded-lg bg-white focus:bg-cyan-300 px-5 py-1 text-left w-full hover:bg-cyan-200 duration-300 my-2">English</button>
        <button class="rounded-lg bg-white focus:bg-cyan-300 px-5 py-1 text-left w-full hover:bg-cyan-200 duration-300 my-2">Lectores Competentes</button>
      </div>
    </div>
  )
}

function Report(){
  return(
    <div class="w-full bg-violet-950/50 rounded-lg mx-4 px-5">
      <p class="text-violet-800/50 mx-2 my-3">Reporte detallado</p>
      <div class="flex flex-row  w-full bg-cyan-300 rounded-full px-3 py-2">
        <p class="mx-2">Sociales</p>
        <p class="ml-auto mx-2">Total asignatura: 98</p>
      </div>

      <div class="flex flex-row  w-11/12 bg-violet-300/75 rounded-lg px-3 py-2 m-3">
        <p class="mx-2 text-white">Proceso Cognitivo y Procedimental</p>
        <input class="appearance-none block w-12 text-sm bg-gray-200 text-gray-700 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="proceso" type="text" placeholder="65%"/>
        <p class="text-cyan-300 ml-auto">Total: 100%</p>

      </div>

      <div class="bg-violet-950/50 rounded-lg p-3 w-10/12 mx-5">
        <p class="text-white/75 mx-5">Notas</p>
        <div class="flex flex-row px-2 m-4 bg-violet-300/75 rounded-lg px-2 py-2 pr-6">
          <p class="mx-2 text-white">Nota 1</p>
          <input class="appearance-none block w-12 text-sm bg-gray-200 text-gray-700 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ml-auto" id="nota" type="text" placeholder="82"/>
        </div>
      </div>
      
    </div>
  )
}