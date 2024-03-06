import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <>
    <Navbar />
    <Outlet />
  </>
  )
}
