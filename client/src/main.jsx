import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Campgrounds from './components/Campgrounds/Campgrounds.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='error-header'>Page does not exist.  Please try another route.</h1>,
    children: [
      {
        index: true,
        element: <Campgrounds />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
