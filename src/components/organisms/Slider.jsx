
import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import image1 from '../../../public/assets/images/real_image.jpg';
import image2 from '../../../public/assets/images/real_image2.jpg';
import image6 from '../../../public/assets/images/image1.png';
import image3 from '../../../public/assets/images/image3.png';


const Slider = (props) => {
 
  return (

    <AliceCarousel >

      <div className="slider__img-container">
        <img src={image1} className="slider__img"/>
      </div>

      <div className="slider__img-container">
        <img src={image2} className="slider__img"/>
      </div>
   
      <div className="slider__img-container">
        <img src={image3} className="slider__img"/>
      </div>
      <div className="slider__img-container">
        <img src={image6} className="slider__img"/>
      </div>
   
      

    </AliceCarousel>
  );
};

export default Slider;
