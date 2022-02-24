import { useState } from "react";
import './carousel.css'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Circle from './Images/image.PNG';
import Message from './Images/image2.PNG';
import Stars from './Images/image3.PNG';
import Computer from './Images/image4.PNG'

const sliderImage = [
  {
    id: 1,
    image: Circle,
    title: "YOUR FEEDBACK FUELS US",
    p: "Your words have weight. Nothing is more important than the fans!",
  },

  {
    id: 2,
    image: Message,
    title: "YOUR FEEDBACK FUELS US",
    p: "Your words have weight. Nothing is more important than the fans!",
  },

  {
    id: 3,
    image:Stars,
    title: "YOUR FEEDBACK FUELS US",
    p: "Your words have weight. Nothing is more important than the fans!",
  },


  {
    id: 4,
    image:Computer,
    title: "YOUR FEEDBACK FUELS US",
    p: "Your words have weight. Nothing is more important than the fans!",
  },

  
];


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
