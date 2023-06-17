import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'


function Home() {
  return (
   <>
   <Announce/>
   <Navbar/>
   <Slider/>
   <Categories/>
   <Products/>
   <Products/>
   <NewsLetter/>
   <Footer/>
   </>
  )
}

export default Home
