import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '../hooks/useActions';
import * as modalActions from '../actions/ModalActions';
import * as feedActions from '../actions/feedActions';

import ButtonsBar from '../components/atoms/ButtonsBar';
import IconButton from '../components/atoms/IconButton';
import Accordion from '../components/atoms/Accordion';
import Loader from '../components/atoms/Loader';
import Slider from '../components/organisms/Slider';
import FilterModal from '../components/organisms/FilterModal';
import MatchModal from '../components/organisms/MatchModal';
import KeyboardExplanation from '../components/organisms/KeyboardExplanation';

const totalActions = {
  ...modalActions,
  ...feedActions,
};

const collapseAccordion = () => {
  const infoToggle = document.querySelector('.bottom-info');
  const iconArrow = document.querySelector('.accordion__content .icon-button');
  infoToggle.classList.toggle('bottom-info-collapse');
  iconArrow.classList.toggle('icon-rotate');
};

const RenderFeedComponents = ({ clothes }) => {
  if (!clothes) { return null; }
  return (
    <>
      <Slider
        picture={clothes.picture3}
        picture2={clothes.picture2}
        picture3={clothes.picture}
      />
      <Accordion
        location={clothes.owner_is.profile.city}
        NameOwner={clothes.owner_is.first_name}
        clothesName={clothes.category}
        clothesGenre={clothes.gender}
        clothesState={clothes.state}
        clothesInfo={clothes.description}
        clothesSize={clothes.size}
        collapseAccordion={collapseAccordion}
      />
    </>
  );
};

const Feed = () => {
  const MatchModalState = useSelector((state) => state.modalReducers.MatchModalState);
  const FilterModalState = useSelector((state) => state.modalReducers.FilterModalState);
  const KeyboardExplanationModal = useSelector((state) => state.modalReducers.KeyboardExplanationModal);
  const clothesFeed = useSelector((state) => state.userReducer.clothesFeed);
  const positionClothe = useSelector((state) => state.userReducer.positionClothe);
  const loading = useSelector((state) => state.userReducer.loading);
  const actions = useActions(totalActions);

  useEffect(() => {
    actions.turnModalState('KeyboardExplanationModal', true);
    actions.fetchClothesFeed();
  }, []);

  const nextClothe = (args) => {
    if (positionClothe >= (clothesFeed.results.length - 1)) {
      actions.fetchClothesFeed(clothesFeed.next);
      return;
    }
    actions.nextPositionClothe(args);
  };

  const handleOpenModal = () => {
    actions.turnModalState('FilterModal', true);
  };

  const clothes = (!clothesFeed) ? null : clothesFeed.results[positionClothe];

  const handlelike = () => {
    nextClothe({
      clothe: clothes.id,
      value: 'LIKE',
    });
  };

  const handleDislike = () => {
    nextClothe({
      clothe: clothes.id,
      value: 'DISLIKE',
    });
  };

  const handleSuperlike = () => {
    nextClothe({
      clothe: clothes.id,
      value: 'SUPERLIKE',
    });
  };

  const keyPress = () => {
    const key = event.code;
    if (key === 'ControlLeft') {
      handleDislike();
    } else if (key === 'AltLeft') {
      handleSuperlike();
    } else if (key === 'ControlRight') {
      handlelike();
    } else if (key === 'Escape') {
      actions.turnModalState('MatchModal', false);
    } else if (key === 'ArrowUp' || key === 'ArrowDown') {
      collapseAccordion();
    }
  };

  window.onkeydown = keyPress;

  console.log('Estos son los datos', clothes);

  return (
    <section>
      <div className="feed">
        <div className="search-button">
          <IconButton
            iconName="search"
            space="40px"
            type="disabled"
            handleClick={() => handleOpenModal()}
          />
        </div>

        {loading && (
          <div className="row">
            <Loader />
          </div>
        )}

        <RenderFeedComponents clothes={clothes} />

        {clothes && (
          <ButtonsBar
            handleDislike={handleDislike}
            handleSuperlike={handleSuperlike}
            handlelike={handlelike}
          />
        )}
      </div>

      <MatchModal
        modalState={MatchModalState}
        onCloseModal={() => actions.turnModalState('MatchModal', false)}
        nameUserMatch="Vicente Fernández"
      />

      <FilterModal
        modalState={FilterModalState}
        onCloseModal={() => actions.turnModalState('FilterModal', false)}
      />
      <KeyboardExplanation
        modalState={KeyboardExplanationModal}
        onCloseModal={() => actions.turnModalState('KeyboardExplanationModal', false)}
      />
    </section>
  );
};

export default Feed;
