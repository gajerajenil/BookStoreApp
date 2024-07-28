import React from 'react';
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './componants/Signup';

function App() {
  return (
   <>
   
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/course' element={<Courses />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
   </Routes>
   </>
  )
}

export default App
