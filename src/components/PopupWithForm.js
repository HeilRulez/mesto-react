export default function PopupWithForm(props) {
    return (
      <section className={`overlay overlay_for_${props.name} ${props.isOpen}`}>
      <div className="modal-form">
        <button className="modal-form__close" type="button"></button>
        <h2 className="modal-form__title">{props.title}</h2>
        <form className={`form form_for_${props.name}`} name={props.name} noValidate>
          <input className={`form__name form__name_for_${props.name} form__input`} id="nameInput" type="text" name="name" minLength="2" maxLength="40" required autoComplete="off" />
          <span className="form__text-error" id="nameInput-error"></span>
          <input className={`form__data form__data_for_${props.name} form__input`} id="description" type="text" name="about" minLength="2" maxLength="200" required autoComplete="off" />
          <span className="form__text-error" id="description-error"></span>
          <button className="form__btn-submit" type="submit">Сохранить</button>
        </form>
      </div>
    </section>
    )
}
