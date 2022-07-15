import PopupWithForm from './PopupWithForm';

export default function DeletePopup({isOpen, onClose, onDeleteCard, card}) {

  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard(card);
  }

  return (
    <PopupWithForm
        title={'Вы уверены?'}
        name={'delCard'}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText={'Да'} />

  )
}
