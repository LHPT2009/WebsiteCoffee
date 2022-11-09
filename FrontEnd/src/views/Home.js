import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import BannerHome from '../components/Main/BannerHome'
import Introduce from '../components/Main/Introduce'
import MenuHome from '../components/Main/MenuHome'
import Button from '../components/Button/Button'
import Search from '../components/Search/Search'

const Home = () => {
  return (
    <div className="font-googleSansRegular">
      <Search/>
      <Header />
      
      <BannerHome />
      <div className="mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        <MenuHome />
        
        <Introduce />
      </div>
      <Footer />
    </div>
  )
}

export default Home
