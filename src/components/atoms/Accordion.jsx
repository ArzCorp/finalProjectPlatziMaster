import React from 'react';
import IconButton from './IconButton';
import Icon from './Icon';

const Accordion = (props) => {

  const { location, clothesName, NameOwner, clothesGenre, clothesState, clothesInfo } = props;

  const collapseAccordion = () => {
    var infoToggle = document.querySelector('.bottom-info');
    var iconArrow = document.querySelector('span.default-icon.our-icondown-arrow');
    infoToggle.classList.toggle("bottom-info-collapse");
    iconArrow.classList.toggle("icon-rotate");

  };
 
  return (
    <div className="accordion">

      <div className="top-info">
        <h2>{NameOwner}</h2>
        <h2>{clothesName}</h2>

        <div className="accordion-row">
          <Icon color="white" iconName="location" />
          <div>{location}</div>
          </div>
    
        <div className="genre-state">
          <div  className="accordion-row">
            <div><b> Genero: </b></div>
            <div>{clothesGenre}</div>
          </div>
          <div  className="accordion-row">
            <div><b>Estado:</b></div>
            <div>{clothesState}</div>
          </div>
          </div>
      
        
      </div>

        <IconButton colorIcon="white" iconName="down-arrow" size="8px" space="25px"  bgColor="rgba(255,255,255,.5)" handleClick={collapseAccordion}/>

        <div className="bottom-info">
          {clothesInfo}
        </div>
    </div>
  );
};

export default Accordion;