import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountryDetails from './components/CountryDetails.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/country/:alphacode", element: <CountryDetails /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
