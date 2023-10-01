import React, { useEffect } from 'react';
import Browse from './Browse';
import Login from "./Login";
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';



const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  return (
    <div >
  
  <RouterProvider  router={appRouter}/>

 
    </div>
  )
}

export default Body