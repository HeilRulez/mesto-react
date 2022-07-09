import {useState, useEffect, useContext} from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [cards, getCards] = useState([]);
  const currentUserContext = useContext(CurrentUserContext)

  useEffect(() => {
    api.renderAllCards()
      .then(cards => {
        getCards(cards)
      })
      .catch(err => console.error(`Ошибка ${err} при загрузке данных.`))
  }, []);

    return (
      <main>
        <section className="profile">
          <button className="profile__avatar" style={{backgroundImage:`url(${currentUserContext.avatar})`}} onClick={onEditAvatar}>
            <div className="profile__avatar-edit"></div>
          </button>
          <div className="profile-info">
            <div className="profile-info__conteiner">
              <h1 className="profile-info__name">{currentUserContext.name}</h1>
              <button className="profile-info__btn" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile-info__description">{currentUserContext.about}</p>
          </div>
            <button className="profile__add-btn" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="cards">{cards.map((card) => (
          <Card key={card._id} data={card} onCardClick={onCardClick} />
        ))}</section>
    </main>
    )
};

