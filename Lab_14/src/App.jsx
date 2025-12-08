import React from 'react'
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import route from './routes.jsx'
import EventEmitter from './components/EventEmmiters/EventEmitter.jsx'
import Faculty from './components/Faculty/Faculty.jsx'
import Students from './components/Students/Students.jsx'
import Products from './components/Products/Products.jsx'
import StudentData from './components/PropsDemo/StudentData.jsx'
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering.jsx'
import NavBar from './components/UseOFLink/NavBar.jsx'
import Home from './Home.jsx'
const App = () => {
  //Step-1:Install npm i react-router-dom from npm 
  //Step -2:import BrowserRouter,inside this Routes and Route as show in below
  //Step-3:give Path and Element attribute.in path gave url and element we give component which we want to call when perticualar usl will call
  return (
    <div className='container'>
   {/* <EventEmitter/> */}
   {/* <ConditionalRendering/> */}

   
   {/* This is Style of Routing in which we define Route in Seprate File */}
   {/* <RouterProvider router={route} /> */}

{/* This is Old Style Routing When We define Route in App.jsx */}
   <BrowserRouter>
   <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/faculties" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/demo" element={<StudentData/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/conditional' element={<ConditionalRendering/>}/>
        <Route path='/event' element={<EventEmitter/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App