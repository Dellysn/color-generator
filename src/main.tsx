import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home.tsx";
import "./styles/app.css";
import "./styles/footer.css";
const router = createBrowserRouter([
  {
   
       path: "/",
        element: <HomePage />,
      
    
  },
]);




ReactDOM.render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
  document.getElementById('root')
);