import React from 'react'
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


const router = createBrowserRouter(
  createRoutesFromElements(<>
     <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
  </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
