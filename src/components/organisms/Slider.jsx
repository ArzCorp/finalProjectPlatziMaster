import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

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
