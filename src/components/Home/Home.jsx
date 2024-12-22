import React from 'react'
import { Banner } from './Banner'
import Services from './Services'
import Professional from './Professional'

export const Home = () => {
  return (
    <div className='min-h-screen'>
       <Banner></Banner>
       <Services></Services>
       <Professional></Professional>
    </div>
  )
}
