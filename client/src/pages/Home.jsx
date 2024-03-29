import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import { Footer } from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Newsletter } from '../Components/Newsletter'
import { Product } from '../Components/Product'
import { Products } from '../Components/Products'



import Slider from '../Components/Slider'
import { ProductList } from './ProductList'

function Home() {
  return (
    <div className='container' >
      <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
  
    <Newsletter/>
    <Footer/>

  
    
    
   
    </div>
  )
}

export default Home