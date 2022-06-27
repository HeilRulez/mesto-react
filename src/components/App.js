import {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {

  const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
  const [selectedCard, handleCardClick] = useState({});

  function closeAllPopups() {
    setAvatarPopupOpen(false);
    setProfilePopupOpen(false);
    setPlacePopupOpen(false);
    handleCardClick({});
  }

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setPlacePopupOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}>
          <input className="form__name form__name_for_profile form__input" id="nameInput" type="text" name="name" minLength="2" maxLength="40" placeholder="Имя" required autoComplete="off" />
          <span className="form__text-error" id="nameInput-error"></span>
          <input className="form__data form__data_for_profile form__input" id="description" type="text" name="about" minLength="2" maxLength="200" placeholder="Профиль" required autoComplete="off" />
          <span className="form__text-error" id="description-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={'Новое место'}
        name={'addCard'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Создать'}>
          <input className="form__name form__name_for_addCard form__input" id="place" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required autoComplete="off" />
          <span className="form__text-error" id="place-error"></span>
          <input className="form__data form__data_for_addCard form__input" id="adress" type="url" name="link" placeholder="Ссылка на картинку" required autoComplete="off" />
          <span className="form__text-error" id="adress-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={'Обновить аватар'}
        name={'avatar'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}>
          <input className="form__name form__name_for_avatar form__input" id="avatar" type="url" name="link" placeholder="Ссылка на картинку" required autoComplete="off" />
          <span className="form__text-error" id="avatar-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title={'Вы уверены?'}
        name={'delCard'}
        isOpen={console.log()}
        onClose={closeAllPopups}
        buttonText={'Да'} />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </div>
  );
}
