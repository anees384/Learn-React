import React from 'react'
import { Route, RouterProvider as Router, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Products from '../pages/products/Products'

function ReactRouter() {
  return (
    <>
      <Router >
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/> } />
            <Route path="/products" element={<Products/> } />
        </Routes>
      </Router>
    </>
  )
}

export default ReactRouter
