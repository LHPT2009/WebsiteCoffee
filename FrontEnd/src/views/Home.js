import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import BannerHome from '../components/Main/BannerHome'
import Introduce from '../components/Main/Introduce'
import MenuHome from '../components/Main/MenuHome'
import Cart from './Cart/Cart'

const Home = () => {
  return (
    <div className="font-googleSansRegular">
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
