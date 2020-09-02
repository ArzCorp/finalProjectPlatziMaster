import React from 'react';
import AliceCarousel from 'react-alice-carousel';

const Slider = (props) => {
  const { picture, picture2, picture3 } = props;

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
