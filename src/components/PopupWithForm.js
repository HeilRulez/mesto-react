export default function PopupWithForm({name, isOpen, onClose, title, children}) {
    return (
      <section className={`overlay overlay_for_${name} ${isOpen}`}>
      <div className="modal-form">
        <button className="modal-form__close" type="button" onClick={onClose}></button>
        <h2 className="modal-form__title">{title}</h2>
        <form className={`form form_for_${name}`} name={name} noValidate>
          {children}
        </form>
      </div>
    </section>
    )
}
