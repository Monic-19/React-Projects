import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./styles/App.scss";

import Home from "./components/Home"
import "./styles/Home.scss";

import Footer from './components/Footer';

import Contact from "./components/Contact"
import Service from "./components/Service"

import "./styles/mediaQueries.scss"

const App = () => {
  return (
  <BrowserRouter>
  <Header></Header>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/services' element={<Service></Service>}></Route>

  </Routes>
  <Footer></Footer>
  </BrowserRouter>
  )
}

export default App
