import React from 'react';
import IconButton from './IconButton';
import Icon from './Icon';

const Accordion = (props) => {
  const { location, clothesName, NameOwner, clothesGenre, clothesState, clothesInfo, clothesSize } = props;

  const collapseAccordion = () => {
    const infoToggle = document.querySelector('.bottom-info');
    const iconArrow = document.querySelector('.accordion__content .icon-button');
    infoToggle.classList.toggle('bottom-info-collapse');
    iconArrow.classList.toggle('icon-rotate');
  };

  return (
    <div className="accordion">

      <div className="accordion__content">

        <div className="top-info">

          <div>
            <h2>{clothesName}</h2>
            <div className="accordion-row">
              <p><b>Estado:   </b></p>
              <p>{` ${clothesState}`}</p>
            </div>
          </div>

          <div className="genre-state">

            <div className="accordion-row">
              <p><b>Talla:</b></p>
              <p>{clothesSize}</p>
            </div>

            <div className="accordion-row">
              <p><b> Genero: </b></p>
              <p>{clothesGenre}</p>
            </div>

          </div>

        </div>

        <IconButton
          tabIndexName="ver u ocultar detalles"
          colorIcon="var(--Color-Primary)"
          iconName="down-arrow" size="8px"
          space="25px" bgColor="var(--Color-Grayscale-1) "
          handleClick={collapseAccordion}
        />

        <div className="bottom-info">
          <div className="row">
            <div className="accordion-row">
              <Icon color="var(--Color-Grayscale-3)" iconName="profile" tabIndexName="Nombre del Plropietario"/>
              <p>{NameOwner}</p>
            </div>
            <div className="accordion-row">
              <Icon color="var(--Color-Grayscale-3)" iconName="location" tabIndexName="Loacación del propietario" />
              <p>{location || 'Ubicacíon'}</p>
            </div>

          </div>

          <hr />

          <div className="accordion-row accordion-row__description">
            <Icon color="var(--Color-Grayscale-3)" iconName="description" tabIndexName="descripción de la prenda" />
            <p>{clothesInfo || 'Descripción de la prenda'}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Accordion;
