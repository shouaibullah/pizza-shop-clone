import Image from 'next/image';
import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      <div>
        <img
          src="/images/slider-1.png"
          className="h-72 md:h-[calc(100vh-80px)] object-cover"
        />
      </div>
      <div>
        <img
          src="/images/slider-2.jpg"
          className="h-72 md:h-[calc(100vh-80px)] object-cover"
        />
      </div>
      <div>
        <img
          src="/images/slider-3.webp"
          className="h-72 md:h-[calc(100vh-80px)] object-cover"
        />
      </div>
    </Carousel>
  );
};

export default Hero;
