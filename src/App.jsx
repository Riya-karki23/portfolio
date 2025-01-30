import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Certificates from './pages/Certificates'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/certificates' element={<Certificates/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/resume' element={<Resume/>}/>
   </Routes>
   </>
  )
}

export default App