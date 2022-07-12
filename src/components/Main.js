import {useState, useEffect, useContext} from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    api.renderAllCards()
      .then(cards => {
        setCards(cards)
      })
      .catch(err => console.error(`Ошибка ${err} при загрузке карточек.`))
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    api.handleLike(card._id, !isLiked)
      .then(сard => {
        setCards((state) => state.map((c) => c._id === card._id ? сard : c));
    })
      .catch(err => console.error(`Ошибка ${err} при обработке лайка.`));
  }

  function handleCardDelete(card) {
    api.reqDelCard(card._id)
    .then((data) => {
      // setCards((data) => cards.filter());
      console.log(data);
  })
    .catch(err => console.error(`Ошибка ${err} при удалении карточки.`));
  }

    return (
      <main>
        <section className="profile">
          <button className="profile__avatar" style={{backgroundImage:`url(${currentUser.avatar})`}} onClick={onEditAvatar}>
            <div className="profile__avatar-edit"></div>
          </button>
          <div className="profile-info">
            <div className="profile-info__conteiner">
              <h1 className="profile-info__name">{currentUser.name}</h1>
              <button className="profile-info__btn" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile-info__description">{currentUser.about}</p>
          </div>
            <button className="profile__add-btn" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="cards">{cards.map((card) => (
          <Card key={card._id} data={card} onCardClick={onCardClick} onCardLike={handleCardLike} />
        ))}</section>
    </main>
    )
};

