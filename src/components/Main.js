import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

export default function Main(props) {

  const [userName, setuserName] = React.useState();
  const [userDescription, setuserDescription] = React.useState();
  const [userAvatar, setuserAvatar] = React.useState();

  const [cards, getCards] = React.useState([]);

  React.useEffect(() => {
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
          <button className="profile__avatar" style={{backgroundImage:`url(${userAvatar})`}} onClick={props.onEditAvatar}>
            <div className="profile__avatar-edit"></div>
          </button>
          <div className="profile-info">
            <div className="profile-info__conteiner">
              <h1 className="profile-info__name">{userName}</h1>
              <button className="profile-info__btn" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile-info__description">{userDescription}</p>
          </div>
            <button className="profile__add-btn" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="cards">{cards.map((card) => (
          <Card key={card._id} data={card} onCardClick={props.onCardClick} />
        ))}</section>
    </main>
    )
};

