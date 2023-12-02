import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import BannerSlider from '../../Components/BannerSlider/BannerSlider'
import HomeCategories from '../../Components/Category/HomeCategories'
import Footer from '../../Components/Footer/Footer'
import AllProducts from '../../Components/AllProducts/AllProducts'



const Home = () => {
  return (
    <div>
        <NavBar/>
        <BannerSlider/>
        <HomeCategories/>
        <AllProducts/>
        <Footer/>
              
    </div>
  )
}

export default Home