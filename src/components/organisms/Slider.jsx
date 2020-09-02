import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import image1 from '../../../public/assets/images/real_image.jpg';
import image2 from '../../../public/assets/images/real_image2.jpg';
import image6 from '../../../public/assets/images/image1.png';

import image3 from '../../../public/assets/images/image3.png';

const imagesObj = {
  image1: '../../../public/assets/images/real_image.jpg',
  image2: '../../../public/assets/images/real_image2.jpg',
  image3: '../../../public/assets/images/image1.png',
  image3: '../../../public/assets/images/image3.png',
};

let sw = false;

const Slider = (props) => {
  const [refesh, setRefresh] = useState(0);
  const { picture, picture2, picture3 } = props;
  if (!sw) {
    setTimeout(() => {
      sw = true;
      setRefresh(refesh  + 1)
    }, 0)
    return null;
  }

  sw = false;

  return (
    <AliceCarousel>

      <div className="slider__img-container">
        <img src={picture} className="slider__img" />
      </div>
      <div className="slider__img-container">
        <img src={picture2} className="slider__img" />
      </div>
      <div className="slider__img-container">
        <img src={picture3} className="slider__img" />
      </div>
 
    </AliceCarousel>
  );
};

export default Slider;
