export default function PopupWithForm(props) {
    return (
      <section className="overlay overlay_for_profile">
      <div className="modal-form prof">
        <button className="modal-form__close" type="button"></button>
        <h2 className="modal-form__title">{props.title}</h2>
        <form className="form form_for_profile" name={props.name} novalidate>
          <input className="form__name form__name_for_profile form__input" id="nameInput" type="text" name="name" minlength="2" maxlength="40" required autocomplete="off" />
          <span className="form__text-error" id="nameInput-error"></span>
          <input className="form__data form__data_for_profile form__input" id="description" type="text" name="about" minlength="2" maxlength="200" required autocomplete="off" />
          <span className="form__text-error" id="description-error"></span>
          <button className="form__btn-submit" type="submit">Сохранить</button>
        </form>
      </div>
    </section>
    )
}
