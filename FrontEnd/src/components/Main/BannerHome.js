import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import { Link } from 'react-router-dom'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const BannerHome = () => {
  const images = [
    {
      source: 'https://i.imgur.com/TZExxgM.png',
    },
    {
      source: 'https://i.imgur.com/Mr8A0h6.png',
    },
    {
      source: 'https://i.imgur.com/EoMTm4S.png',
    },
  ]

  return (
    <Link to={'/product'}>
      <AutoplaySlider
        className="lg:h-[410px] xs:h-[150px] xl:h-[581px] mb-10 xs:mb-6"
        bullets={false}
        cssModule={AwesomeSliderStyles}
        play={true}
        cancelOnInteraction={true}
        interval={3000}
      >
        {images.map((item) => (
          <div data-src={item.source} />
        ))}
      </AutoplaySlider>
    </Link>
  )
}

export default BannerHome
