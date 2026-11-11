import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import Layout from './components/Layout/Layout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route path='/products/:id' element={<Products />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App