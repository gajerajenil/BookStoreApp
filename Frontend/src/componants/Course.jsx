import React, { useEffect, useState } from 'react'
import Cards from './Cards'

import { Link } from 'react-router-dom'
import axios from 'axios'

function Course() {
  const [book, setBook] =useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res= await axios.get("http://localhost:3000/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, []);
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl  md:text-4xl'>We're delightd to have you <span className='text-pink-500 font-semibold'>Here :)</span></h1>
    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere doloremque earum ipsum officia amet itaque omnis ex autem similique! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam beatae provident consequatur exercitationem alias iste corrupti, laboriosam iure laudantium cum velit cumque molestiae rem harum voluptate culpa nesciunt accusantium aut.
    </p>
    <Link to="/">
    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200'>Back</button>
    </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {
        book.map((item)=>(
          <Cards key={item.id} item={item} />
        ))
      }
    </div>
  </div>
  </>
  )
}

export default Course
