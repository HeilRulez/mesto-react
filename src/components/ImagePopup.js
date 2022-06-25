export default function ImagePopup(props) {

    return (
      <section className={`overlay overlay_for_view ${props.card && 'overlay_visible'}`}>
      <div className="modal-form modal-form_for_view">
        <div>
          <button className="modal-form__close" onClick={props.onClose} type="button"></button>
          <img className="modal-form__view-img" style={{backgroundImage: `url(${props.card})`}} alt="для тестов" />
        </div>
        <h2 className="modal-form__title modal-form__title_for_view"></h2>
      </div>
    </section>
    )
}

