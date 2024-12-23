import React from 'react'
import { Banner } from './Banner'
import Services from './Services'
import Professional from './Professional'
import Testimonials from './Testimonials'
import SubmissionForm from './SubmissionFrom'
import WhyChooseUs from './WhyChooseUs'
import OffersAndPackages from './OffersAndPackages'

export const Home = () => {
  return (
    <div className='min-h-screen'>
       <Banner></Banner>
       <Services></Services>
       <Professional></Professional>
       <WhyChooseUs></WhyChooseUs>
       <OffersAndPackages></OffersAndPackages>
       <Testimonials></Testimonials>
       <SubmissionForm></SubmissionForm>
    </div>
  )
}
