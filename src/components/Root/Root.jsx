import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const Root = () => {
  return (
    <div className="mx-5">
        <Navbar></Navbar>
        <div className='mx-10'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}
