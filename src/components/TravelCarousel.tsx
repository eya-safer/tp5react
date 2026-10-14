import { Carousel } from 'react-bootstrap'
import { heroSlides } from '../data'

export function TravelCarousel() {
  return (
    <Carousel className="travel-carousel" interval={5000} pause="hover">
      {heroSlides.map((slide) => (
        <Carousel.Item key={slide.image}>
          <img className="d-block w-100" src={slide.image} alt={slide.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
