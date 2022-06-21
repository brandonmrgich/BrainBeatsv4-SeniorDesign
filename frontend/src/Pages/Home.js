import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Cards from '../Components/Cards/Cards'
import Carousel from '../Components/Carousel/Carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css"

const Home = () => {
  return (
    <>
    <Navbar />
    <br />
    <div style={{width: '50%', marginLeft: '25%'}}>
    <Carousel />
    </div>
    <br />
    <Cards />
    </>
  )
}

export default Home