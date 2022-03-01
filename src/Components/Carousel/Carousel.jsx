import { useState } from "react";
import './carousel.css'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { SliderImage as sliderImage } from "./SliderImage";

const Carousel = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  return (

    <div className="slider">
      <div className="carousel-inner">
        <img src={sliderImage[slideIndex].image} alt='test'/>
      </div>

      <div className="center">
        <h3>{sliderImage[slideIndex].title}</h3>
        <p>{sliderImage[slideIndex].p}</p>
      </div>

      <div className="slider-buttons">
            <BiLeftArrow onClick={() => slideIndex > 0 && setSlideIndex(slideIndex-1)} style={{fontSize: 30, color: 'blue'}}/>
            <BiRightArrow onClick={() => slideIndex < sliderImage.length -1 && setSlideIndex(slideIndex+1)} style={{fontSize: 30, color: 'blue'}} />
      </div>
    </div>
  );
};

export default Carousel;
