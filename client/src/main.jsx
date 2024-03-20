import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Campgrounds from './components/Campgrounds/Campgrounds.jsx'
import CampgroundById from './components/CampgroundByID/CamgroundByID.jsx'
import Home from './components/Home/Home.jsx'
import CampForm from './components/CampForm/CampForm.jsx';
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h2 className='error-header'>Page does not exist.  Please try another route.</h2>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/campgrounds',
        element: <Campgrounds />
      },
      {
        path: '/campgrounds/:id',
        element: <CampgroundById />
      },
      {
        path: '/campgrounds/new',
        element: <CampForm />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
