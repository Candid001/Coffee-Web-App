import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Ads from './components/Ads'
import Products from './components/Products'
import Customer from './components/Customer'
import Join from './components/Join'
import Footer from './components/Footer'
import About from './components/About'


const App = () => {

  return (
    <>
      
      <Header/>
      <main><a href="Home">
        <Hero/>
        <Ads/>
        <Products/>
        <Customer/>
        <Join/>
      </a></main>
      {/* <About/> */}
      <Footer/>
    </>
  )
}

export default App