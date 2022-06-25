import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {

  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState('');
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState('');
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState('');
  const [selectedCard, handleCardClick] = React.useState('');

  function closeAllPopups() {
    setAvatarPopupOpen('');
    setProfilePopupOpen('');
    setPlacePopupOpen('');
    handleCardClick('');
  }


  function handleEditAvatarClick() {
    setAvatarPopupOpen('overlay_visible');
  }

  function handleEditProfileClick() {
    setProfilePopupOpen('overlay_visible');
  }

  function handleAddPlaceClick() {
    setPlacePopupOpen('overlay_visible');
  }

  return (
    <div className="page">
      <Header />
      <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm
        children={
          <>
          <input className="form__name form__name_for_profile form__input" id="nameInput" type="text" name="name" minLength="2" maxLength="40" required autoComplete="off" />
          <span className="form__text-error" id="nameInput-error"></span>
          <input className="form__data form__data_for_profile form__input" id="description" type="text" name="about" minLength="2" maxLength="200" required autoComplete="off" />
          <span className="form__text-error" id="description-error"></span>
          <button className="form__btn-submit" type="submit">Сохранить</button>
          </>
        }
        title={'Редактировать профиль'}
        name={'profile'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups} />

      <PopupWithForm
        children={
          <>
          <input className="form__name form__name_for_addCard form__input" id="place" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required autoComplete="off" />
          <span className="form__text-error" id="place-error"></span>
          <input className="form__data form__data_for_addCard form__input" id="adress" type="url" name="link" placeholder="Ссылка на картинку" required autoComplete="off" />
          <span className="form__text-error" id="adress-error"></span>
          <button className="form__btn-submit" type="submit">Создать</button>
          </>
        }
        title={'Новое место'}
        name={'addCard'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups} />

      <PopupWithForm
        children={
          <>
          <input className="form__name form__name_for_avatar form__input" id="avatar" type="url" name="link" placeholder="Ссылка на картинку" required autoComplete="off" />
          <span className="form__text-error" id="avatar-error"></span>
          <button className="form__btn-submit" type="submit">Сохранить</button>
          </>
        }
        title={'Обновить аватар'}
        name={'avatar'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups} />

      <PopupWithForm
        children={
          <button className="form__btn-submit" type="submit">Да</button>
        }
        title={'Вы уверены?'}
        name={'delCard'}
        isOpen={console.log()}
        onClose={closeAllPopups} />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </div>
  );
}
