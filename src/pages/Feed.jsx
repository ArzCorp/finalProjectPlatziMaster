import React from 'react';

import ButtonsBar from '../components/atoms/ButtonsBar';
import IconButton from '../components/atoms/IconButton';
import Accordion from '../components/atoms/Accordion';
import Slider from '../components/organisms/Slider';
import NavBar from '../components/organisms/NavBar';

const GridExample = () => (
  <section>
    <div className="feed">

      <NavBar />

      <div className="search-button">
        <IconButton iconName="search" space="40px" type="disabled" handleClick={() => alert('Filtro')}  />
      </div>

      <Slider/>

      <Accordion 
        location="Mexico D.F." 
        clothesName="Chamarra" 
        NameOwner="Alberto" 
        clothesGenre="Masculino" 
        clothesState="Usado" 
        clothesInfo=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat commodo consequats" 
      />

      <ButtonsBar
        handleDislike={() => alert('dislike')}
        handleSuperlike={() => alert('superlike')}
        handlelike={() => alert('like')}
      />

    </div>
  </section>
);

export default GridExample;
