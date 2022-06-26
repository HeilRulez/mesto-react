import {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {

  const [isEditProfilePopupOpen, setProfilePopupOpen] = useState('');
  const [isAddPlacePopupOpen, setPlacePopupOpen] = useState('');
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState('');
  const [selectedCard, handleCardClick] = useState('');

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
        title={'Редактировать профиль'}
        name={'profile'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
          <input className="form__name form__name_for_profile form__input" id="nameInput" type="text" name="name" minLength="2" maxLength="40" required autoComplete="off" />
          <span className="form__text-error" id="nameInput-error"></span>
          <input className="form__data form__data_for_profile form__input" id="description" type="text" name="about" minLength="2" maxLength="200" required autoComplete="off" />
          <span className="form__text-error" id="description-error"></span>
          <button className="form__btn-submit" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        title={'Новое место'}
        name={'addCard'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
          <input className="form__name form__name_for_addCard form__input" id="place" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required autoComplete="off" />
          <span className="form__text-error" id="place-error"></span>
          <input className="form__data form__data_for_addCard form__input" id="adress" type="url" name="link" placeholder="Ссылка на картинку" required autoComplete="off" />
          <span className="form__text-error" id="adress-error"></span>
          <button className="form__btn-submit" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm
        title={'Обновить аватар'}
        name={'avatar'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
          <input className="form__name form__name_for_avatar form__input" id="avatar" type="url" name="link" placeholder="Ссылка на картинку" required autoComplete="off" />
          <span className="form__text-error" id="avatar-error"></span>
          <button className="form__btn-submit" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        title={'Вы уверены?'}
        name={'delCard'}
        isOpen={console.log()}
        onClose={closeAllPopups}>
          <button className="form__btn-submit" type="submit">Да</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </div>
  );
}
