import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import BannerHome from '../components/Main/BannerHome'
import Introduce from '../components/Main/Introduce'
import MenuHome from '../components/Main/MenuHome'

const Home = () => {
  useEffect(() => {
    document.title = 'Coffee Bug Ổn'
  }, [])
  return (
    <>
      <Header />
      <BannerHome />
      <div className="xs:px-3 md:px-4 lg:max-w-[1440px] mx-auto">
        {/* <div className="mx-[-15px] xs:mx-5 sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]"> */}
        <MenuHome />
        <Introduce />
      </div>
      <Footer />
    </>
  )
}

export default Home
