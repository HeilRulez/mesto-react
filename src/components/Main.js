import {useState, useEffect} from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userName, setuserName] = useState('');
  const [userDescription, setuserDescription] = useState('');
  const [userAvatar, setuserAvatar] = useState('');

  const [cards, getCards] = useState([]);

  useEffect(() => {
    api.setDataUser()
    .then(data => {
      setuserName(data.name);
      setuserDescription(data.about);
      setuserAvatar(data.avatar);
    })
    .catch(err => console.error(`Ошибка ${err} при получении данных профиля.`));

    api.renderAllCards()
      .then(cards => {
        getCards(cards)
      })
      .catch(err => console.error(`Ошибка ${err} при загрузке данных.`))
  }, []);

    return (
      <main>
        <section className="profile">
          <button className="profile__avatar" style={{backgroundImage:`url(${userAvatar})`}} onClick={onEditAvatar}>
            <div className="profile__avatar-edit"></div>
          </button>
          <div className="profile-info">
            <div className="profile-info__conteiner">
              <h1 className="profile-info__name">{userName}</h1>
              <button className="profile-info__btn" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile-info__description">{userDescription}</p>
          </div>
            <button className="profile__add-btn" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="cards">{cards.map((card) => (
          <Card key={card._id} data={card} onCardClick={onCardClick} />
        ))}</section>
    </main>
    )
};

