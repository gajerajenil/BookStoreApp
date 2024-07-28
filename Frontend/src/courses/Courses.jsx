import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import Course from '../componants/Course'


function Courses() {
  
  return (
    <>
    <Navbar/>
  <div className='min-h-screen'>  <Course/></div>
    <Footer/>
    </>
  )
}

export default Courses
