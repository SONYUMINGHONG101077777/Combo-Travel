import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel'

const Banner = ({ images }) => {
  return (
    <Carousel className="relative w-full">
      <CarouselContent className="basis-1">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              src={image}
              alt={`Banner ${index}`}
              className="
                w-full 
                object-cover 
                rounded-md
                h-60                /* 📱 Mobile (iPhone 14/16 Pro Max) */
                sm:h-72             /* Tablet */
                md:h-80             /* Medium screen */
                lg:h-96             /* Laptop */
                xl:h-[500px]        /* Large screen */
                transition-all 
                duration-300
              "
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation arrows */}
      <CarouselPrevious className="left-4 md:left-6 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow" />
      <CarouselNext className="right-4 md:right-6 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow" />
    </Carousel>
  )
}

export default Banner
