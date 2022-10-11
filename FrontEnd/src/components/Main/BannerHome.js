import React from 'react'
import Banner from '../../assets/slide/banner1.webp'

const BannerHome = () => {
  return (
    <section className="translate-y-[-60px] block relative">
      <div className="w-full z-[1] relative">
        <div>
          <img src={Banner} alt="" />
        </div>
      </div>
    </section>
  )
}

export default BannerHome
