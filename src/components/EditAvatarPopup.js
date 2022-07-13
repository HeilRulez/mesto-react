import {useRef} from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const avatar = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }

  return (
    <PopupWithForm
        title={'Обновить аватар'}
        name={'avatar'}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText={'Сохранить'}>
          <input className="form__name form__name_for_avatar form__input"
            id="avatar" type="url" name="link"
            ref={avatar} placeholder="Ссылка на картинку"
            required autoComplete="off" />
          <span className="form__text-error" id="avatar-error"></span>
      </PopupWithForm>
  )
}

