import React from 'react'

import Header from '../components/Header/Header'
import BannerHome from '../components/Main/BannerHome'
import Introduce from '../components/Main/Introduce'
import MenuHome from '../components/Main/MenuHome'

const Home = () => {
  return (
    <div className="">
      <Header />
      <main>
        <BannerHome />
        <MenuHome />
        <Introduce />
      </main>
      <footer></footer>
    </div>
  )
}

export default Home
