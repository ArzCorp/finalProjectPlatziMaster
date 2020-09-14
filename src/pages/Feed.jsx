import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { useActions } from '../hooks/useActions';
import * as modalActions from '../actions/ModalActions';
import * as feedActions from '../actions/feedActions';
import * as userActions from '../actions/userActions';

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
  ...userActions,
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
  const likeReceived = useSelector((state) => state.userReducer.likeReceived);
  const currentUser = useSelector((state) => state.userReducer.userLoged.user.first_name);
  const actions = useActions(totalActions);
  console.log('likeReceived', likeReceived);

  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    actions.turnModalState('KeyboardExplanationModal', true);
    actions.fetchNotificationsUser(localStorage.getItem('token'));
    actions.fetchClothesFeed();
  }, []);

  const nextClothe = (args) => {
    if (positionClothe >= (clothesFeed.results.length - 1)) {
      actions.fetchClothesFeed(clothesFeed.next);
      return;
    }
    actions.nextPositionClothe(args);
  };

  const clothes = (!clothesFeed) ? null : clothesFeed.results[positionClothe];
  const matchUser = clothes ? `${clothes.owner_is.first_name} ${clothes.owner_is.last_name}` : 'Usuario';

  const validateLikeReceived = (user) => likeReceived.includes(user);

  const handlelike = async () => {
    const isLikeReceived = await validateLikeReceived(clothes.owner_is.username);
    if (isLikeReceived) {
      actions.turnModalState('MatchModal', true);
      setTimeout(() => {
        actions.turnModalState('MatchModal', false);
        nextClothe({
          clothe: clothes.id,
          value: 'LIKE',
        });
      }, 5100);
      return;
    }
    nextClothe({
      clothe: clothes.id,
      value: 'LIKE',
    });
  };

  const handleSuperlike = async () => {
    const isLikeReceived = await validateLikeReceived(clothes.owner_is.username);
    if (isLikeReceived) {
      actions.turnModalState('MatchModal', true);
      setTimeout(() => {
        actions.turnModalState('MatchModal', false);
        nextClothe({
          clothe: clothes.id,
          value: 'SUPERLIKE',
        });
      }, 5100);
      return;
    }
    nextClothe({
      clothe: clothes.id,
      value: 'SUPERLIKE',
    });
    setIsActive(1);
    setTimeout(() => setIsActive(0), 60000);
  };

  const handleDislike = () => {
    nextClothe({
      clothe: clothes.id,
      value: 'DISLIKE',
    });
  };

  const keyPress = () => {
    const key = event.code;
    if (key === 'ControlLeft') {
      handleDislike();
    } else if (key === 'Space') {
      handleSuperlike();
    } else if (key === 'ControlRight') {
      handlelike();
    } else if (key === 'Escape') {
      actions.turnModalState('MatchModal', false);
    } else if (key === 'ArrowUp' || key === 'ArrowDown') {
      collapseAccordion();
    }
  };

  return (
    <section>
      <Helmet>
        <title>Ourclothe - Encuentra el outfit que necesitas</title>
        <meta
          name="description"
          content="Recorre el catalogo de la ropa publicada,
            utiliza las reacciones para pasar a la siguiente y consigue esa prenda que estabas buscando."
        />
      </Helmet>
      <div
        className="feed"
        onKeyDown={keyPress}
        tabIndex="0"
      >

        <div className="search-button">
          <IconButton
            iconName="search"
            space="40px"
            type="disabled"
            handleClick={() => actions.turnModalState('FilterModal', true)}
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
            disabledSuperLike={isActive}
            handlelike={handlelike}
          />
        )}
      </div>

      <MatchModal
        modalState={MatchModalState}
        onCloseModal={() => actions.turnModalState('MatchModal', false)}
        userName={currentUser}
        nameUserMatch={matchUser}
      />

      <FilterModal
        modalState={FilterModalState}
        onCloseModal={() => actions.turnModalState('FilterModal', false)}
      />
      {!localStorage.getItem('firstVisualisation') && (
        <KeyboardExplanation
          modalState={KeyboardExplanationModal}
          onCloseModal={() => {
            actions.turnModalState('KeyboardExplanationModal', false);
            localStorage.setItem('firstVisualisation', true);
            document.querySelector('.feed').focus();
          }}
        />
      )}
    </section>
  );
};

export default Feed;
