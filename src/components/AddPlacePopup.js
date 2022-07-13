import {useRef} from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const name = useRef();
  const link = useRef();

function handleSubmit(e) {
  e.preventDefault();
  onAddPlace({
    name: name.current.value,
    link: link.current.value
  })
}

  return (
    <PopupWithForm
        title={'Новое место'}
        name={'addCard'}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText={'Создать'}>
          <input className="form__name form__name_for_addCard form__input"
            id="place" type="text" name="name" placeholder="Название"
            minLength="2" maxLength="30" ref={name} required autoComplete="off" />
          <span className="form__text-error" id="place-error"></span>
          <input className="form__data form__data_for_addCard form__input"
            id="adress" type="url" name="link" placeholder="Ссылка на картинку"
            ref={link} required autoComplete="off" />
          <span className="form__text-error" id="adress-error"></span>
      </PopupWithForm>

  )
}
