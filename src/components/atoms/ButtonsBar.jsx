import React from 'react';

import IconButton from './IconButton';

const buttonsBar = (props) => {
  const {
    handleDislike, handleSuperlike, handlelike, disabledSuperLike
  } = props;

  return (
    <div className="buttons-bar">
      <IconButton 
        id="buttonDislike" 
        iconName="Cross" 
        space="55px" 
        type="disabled" 
        handleClick={handleDislike} 
        bgColor="var(--Color-Grayscale-3)" 
      />

      <IconButton 
        id="buttonSuperLike" 
        iconName="star" 
        size="20px" 
        space="40px" 
        colorIcon="var(--Color-Grayscale-1)" 
        bgColor="var(--Color-Secondary)" 
        handleClick={handleSuperlike}
        disabled={disabledSuperLike}
      />

      <IconButton 
        id="buttonLike" 
        iconName="heart" 
        space="55px" 
        type="normal" 
        handleClick={handlelike} 
        bgColor="var(--Color-Primary)" 
      />

    </div>
  );
};

export default buttonsBar;
