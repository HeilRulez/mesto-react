import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

export default function App() {

  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState('');
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState('');
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState('');

  function handleEditAvatarClick() {
    console.log("Avatar");
    setAvatarPopupOpen('overlay_visible');
    // const popup = document.querySelector('.overlay_for_avatar');
    // popup.classList.add('overlay_visible');
  }

  function handleEditProfileClick() {
    console.log("Profile");
    setProfilePopupOpen('overlay_visible');
    // const popup = document.querySelector('.overlay_for_profile');
    // popup.classList.add('overlay_visible');
  }

  function handleAddPlaceClick() {
    console.log("Place");
    setPlacePopupOpen('overlay_visible');
    // const popup = document.querySelector('.overlay_for_addCard');
    // popup.classList.add('overlay_visible');
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm title={'Редактировать профиль'} name={'profile'} isOpen={isEditProfilePopupOpen} />
      <PopupWithForm title={'Новое место'} name={'addCard'} isOpen={isAddPlacePopupOpen} />
      <PopupWithForm title={'Обновить аватар'} name={'avatar'} isOpen={isEditAvatarPopupOpen} />


    {/*
        <form className="form form_for_profile" name="editForm" noValidate>
          <input className="form__name form__name_for_profile form__input" id="nameInput" type="text" name="name" minLength="2" maxLength="40" required autoComplete="off" />
          <span className="form__text-error" id="nameInput-error"></span>
          <input className="form__data form__data_for_profile form__input" id="description" type="text" name="about" minLength="2" maxLength="200" required autoComplete="off" />
          <span className="form__text-error" id="description-error"></span>
          <button className="form__btn-submit" type="submit">Сохранить</button>
        </form>
      </div>
    </section>


        <form className="form form_for_avatar" name="avatarForm" noValidate>
          <input className="form__name form__name_for_avatar form__input" id="avatar" type="url" name="link" placeholder="Ссылка на картинку" required autoComplete="off" />
          <span className="form__text-error" id="avatar-error"></span>
          <button className="form__btn-submit" type="submit">Сохранить</button>
        </form>
      </div>
    </section>

        <form className="form form_for_addCard" name="addForm" noValidate>
          <input className="form__name form__name_for_addCard form__input" id="place" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required autoComplete="off" />
          <span className="form__text-error" id="place-error"></span>
          <input className="form__data form__data_for_addCard form__input" id="adress" type="url" name="link" placeholder="Ссылка на картинку" required autoComplete="off" />
          <span className="form__text-error" id="adress-error"></span>
          <button className="form__btn-submit" type="submit">Создать</button>
        </form>
      </div>
    </section> */}

    <section className="overlay overlay_for_delCard">
      <div className="modal-form modal-form_for_delCard">
        <button className="modal-form__close" type="button"></button>
        <h2 className="modal-form__title">Вы уверены?</h2>
        <form className="form form_for_delCard" name="delCard" noValidate>
          <button className="form__btn-submit" type="submit">Да</button>
        </form>
      </div>
    </section>

    <section className="overlay overlay_for_view">
      <div className="modal-form modal-form_for_view">
        <div>
          <button className="modal-form__close" type="button"></button>
          <img className="modal-form__view-img" src="https://sbis.perm.ru/wp-content/uploads/2019/09/placeholder.png"
            alt="дляТестов" />
        </div>
        <h2 className="modal-form__title modal-form__title_for_view"></h2>
      </div>
    </section>

    <template className="sample-card">
      <div className="card">
        <button className="card__del" type="button"></button>
        <img className="card__img" src="https://sbis.perm.ru/wp-content/uploads/2019/09/placeholder.png" alt="дляТестов" />
        <div className="card__description">
          <h2 className="card__title"></h2>
          <div className="card__like-container">
            <button className="card__like " type="button"></button>
            <span className="card__like-count"></span>
          </div>

        </div>
      </div>
    </template>

  </div>
  );
}
