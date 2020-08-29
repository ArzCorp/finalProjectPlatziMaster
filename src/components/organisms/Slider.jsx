
import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import image1 from '../../../public/assets/images/image1.png';
import image2 from '../../../public/assets/images/image2.png';
import image3 from '../../../public/assets/images/image3.png';
import image4 from '../../../public/assets/images/image4.png';

const Slider = (props) => {

  return (

    <AliceCarousel >

      <img src={image1} className="sliderimg" />
      <img src={image1} className="sliderimg" />
      <img src={image1} className="sliderimg" />
      <img src={image1} className="sliderimg" />
      <img src={image1} className="sliderimg" />
      <img src={image1} className="sliderimg" />
      <img src={image1} className="sliderimg" />

    </AliceCarousel>
  );
};

export default Slider;
