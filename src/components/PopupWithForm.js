export default function PopupWithForm(props) {
    return (
      <section className={`overlay overlay_for_${props.name} ${props.isOpen}`}>
      <div className="modal-form">
        <button className="modal-form__close" type="button" onClick={props.onClose}></button>
        <h2 className="modal-form__title">{props.title}</h2>
        <form className={`form form_for_${props.name}`} name={props.name} noValidate>
          {props.children}
        </form>
      </div>
    </section>
    )
}
