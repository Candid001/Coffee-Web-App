import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu'
import ProductDetails from './Components/ProductDetails';

const App = () => {
  return (
    <>
          <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/products/:title" element={<ProductDetails />} />
      </Routes>
    </Router>

    </>
  )
}

export default App

