import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <App />,
    errorElement: <h1 className='error-header'>Page does not exist.  Please try another route.</h1>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
