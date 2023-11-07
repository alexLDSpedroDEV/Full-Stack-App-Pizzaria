"use client";

import NavBar from '@/components/NavBar'
import React from 'react'
import ListCarros from '@/components/items'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function page() {



  return (
    <div>
      <NavBar />
      <ListCarros />
      
      <ToastContainer position="bottom-left" />
    </div>
  )
}

export default page