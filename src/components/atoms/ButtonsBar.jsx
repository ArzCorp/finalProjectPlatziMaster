import React from 'react';

import IconButton from './IconButton';

const buttonsBar = (props) => {
  const {
    handleDislike, handleSuperlike, handlelike
  } = props;
  return (
    <div className="buttons-bar">
         <IconButton iconName="Cross" space="55px" type="disabled" handleClick={handleDislike} />
        <IconButton iconName="star" size="20px" space="40px" colorIcon="var(--Color-Grayscale-1)" bgColor="var(--Color-Secondary)"  handleClick={handleSuperlike} />
        <IconButton iconName="heart" space="55px" type="normal" handleClick={handlelike} />
    </div>
  );
};

export default buttonsBar;
