import React, { useState } from 'react'
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

export const Courseheader = () => {
  return(
    <div class="flex flex-row  w-full bg-cyan-300 rounded-full px-3 py-2">
      <p class="mx-2">Sociales</p>
      <p class="ml-auto mx-2">Total asignatura: 98</p>
    </div>
  )
}

export const Cognitivo = () => {
  return(
    <div class="flex flex-row  w-11/12 bg-violet-300/75 rounded-lg px-3 py-2 m-3">
      <p class="mx-2 text-white">Proceso Cognitivo y Procedimental</p>
      <input class="appearance-none block w-12 text-sm bg-gray-200 text-gray-700 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="proceso" type="text" placeholder="65%"/>
      <p class="text-cyan-300 ml-auto mr-1">Total: </p><p class="text-cyan-300" id="TotalCourse">100%</p>

    </div>
  )
}
let nextId = 0;
let count = 1;

export const Grades = () => {

  const [grades, setGrades] = React.useState([]);
  const [name, setName] = useState('');
  

  return(
    
    <div class="bg-violet-950/50 rounded-lg p-3 w-10/12 mx-5">
      <div class="flex flex-row">
      <p class="text-white/75 mx-5">Notas</p>
        <button class="ml-auto mx-3" onClick={() => {
          
          setGrades([
          ...grades,
            { id: nextId++, name:count ++}
          ])
        }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#10CDD9" className="w-6 h-6 hoverneon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
          </button>
        <button onClick={() => {
          count--
          setGrades(
            grades.slice(0,-1),
            console.log(grades)
          )
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#10CDD9" className="w-8 h-6 mt-1 mx-2 hoverneon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 12h-15" />
        </svg>
        </button>
      </div>

      <div id="notas">
        {grades.map(grade => (
        <Onegrade key={grade.id} name={grade.name} />
        ))}
      </div>
      
      <div class="flex flex-row">
      <button class="text-cyan-300 ml-auto mx-5">Save</button>
      </div>
    </div>
  )
}


function Onegrade(grade){
  
  return(
    <div class="flex flex-row align-middle px-2 m-4 bg-violet-300/75 rounded-lg px-2 py-2 pr-6">
      <p class="mx-2 text-white">Nota</p> <p class="text-white">{grade.name}</p>
      <input class="appearance-none block w-12 text-sm bg-gray-200 text-gray-700 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ml-auto" id="nota" type="text" placeholder={grade.number}/>
      
    </div>
  )
}
