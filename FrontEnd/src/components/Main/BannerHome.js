import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const BannerHome = () => {
  const images = [
    {
      source:
        'https://file.hstatic.net/1000075078/file/desktop_web_39633030bf10419c865bbc557daa43dd.jpg',
    },
    {
      source:
        'https://file.hstatic.net/1000075078/file/desktop_a0610a7063ba4d86ad63d8b39e51abff.jpg',
    },
    {
      source:
        'https://file.hstatic.net/1000075078/file/desktop_web_8a5dc640f98342b3bccadb25bed0fd7a.jpg',
    },
  ]

  return (
    <section>
      <AutoplaySlider
        className="lg:h-[410px] xl:h-[581px] mb-10"
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
    </section>
  )
}

export default BannerHome
