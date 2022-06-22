import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import PopupWithForm from './PopupWithForm';

export default function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />


    <section className="overlay overlay_for_profile">
      <div className="modal-form prof">
        <button className="modal-form__close" type="button"></button>
        <h2 className="modal-form__title">Редактировать профиль</h2>
        <form className="form form_for_profile" name="editForm" novalidate>
          <input className="form__name form__name_for_profile form__input" id="nameInput" type="text" name="name" minlength="2" maxlength="40" required autocomplete="off" />
          <span className="form__text-error" id="nameInput-error"></span>
          <input className="form__data form__data_for_profile form__input" id="description" type="text" name="about" minlength="2" maxlength="200" required autocomplete="off" />
          <span className="form__text-error" id="description-error"></span>
          <button className="form__btn-submit" type="submit">Сохранить</button>
        </form>
      </div>
    </section>

    <section className="overlay overlay_for_avatar">
      <div className="modal-form modal-form_for_avatar">
        <button className="modal-form__close" type="button"></button>
        <h2 className="modal-form__title">Обновить аватар</h2>
        <form className="form form_for_avatar" name="avatarForm" novalidate>
          <input className="form__name form__name_for_avatar form__input" id="avatar" type="url" name="link" placeholder="Ссылка на картинку" required autocomplete="off" />
          <span className="form__text-error" id="avatar-error"></span>
          <button className="form__btn-submit" type="submit">Сохранить</button>
        </form>
      </div>
    </section>

    <section className="overlay overlay_for_addCard">
      <div className="modal-form modal-form_for_addCard">
        <button className="modal-form__close" type="button"></button>
        <h2 className="modal-form__title">Новое место</h2>
        <form className="form form_for_addCard" name="addForm" novalidate>
          <input className="form__name form__name_for_addCard form__input" id="place" type="text" name="name" placeholder="Название" minlength="2" maxlength="30" required autocomplete="off" />
          <span className="form__text-error" id="place-error"></span>
          <input className="form__data form__data_for_addCard form__input" id="adress" type="url" name="link" placeholder="Ссылка на картинку" required autocomplete="off" />
          <span className="form__text-error" id="adress-error"></span>
          <button className="form__btn-submit" type="submit">Создать</button>
        </form>
      </div>
    </section>

    <section className="overlay overlay_for_delCard">
      <div className="modal-form modal-form_for_delCard">
        <button className="modal-form__close" type="button"></button>
        <h2 className="modal-form__title">Вы уверены?</h2>
        <form className="form form_for_delCard" name="delCard" novalidate>
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
