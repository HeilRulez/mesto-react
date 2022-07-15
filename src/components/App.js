import {useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import DeletePopup from './DeletePopup';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import FormValidator from './FormValidator';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function App() {

  const [isEditProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [selectedCard, handleCardClick] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [cardItem, setCardItem] = useState({});

  useEffect(() => {
    api.getUserInfo()
    .then((dataUser) => {setCurrentUser(dataUser)})
    .catch(err => console.error(`Ошибка ${err} при получении данных профиля.`));
  }, [])

  function closeAllPopups() {
    setAvatarPopupOpen(false);
    setProfilePopupOpen(false);
    setPlacePopupOpen(false);
    setDeletePopupOpen(false);
    handleCardClick({});
  }

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setPlacePopupOpen(true);
  }

  function handleDeletePopup(card) {
    setCardItem(card);
    setDeletePopupOpen(true);
  }

  function handleUpdateUser({name, about}) {
    api.sendData(name, about)
    .then((data) => {setCurrentUser(data)})
    .catch(err => console.error(`Ошибка ${err} при отправке данных профиля.`));
    closeAllPopups();
  }

  function handleUpdateAvatar({avatar}) {
    api.selectionAvatar(avatar)
    .then((data) => {setCurrentUser(data)})
    .catch(err => console.error(`Ошибка ${err} при получении аватара.`));
    closeAllPopups();
  }

  useEffect(() => {
    api.renderAllCards()
      .then(cards => {
        setCards(cards)
      })
      .catch(err => console.error(`Ошибка ${err} при загрузке карточек.`))
  }, [currentUser]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    api.handleLike(card._id, !isLiked)
      .then(сard => {
        setCards((state) => state.map((c) => c._id === card._id ? сard : c));
    })
      .catch(err => console.error(`Ошибка ${err} при обработке лайка.`));
  }

  function handleCardDelete(card) {
    api.reqDelCard(card._id)
    .then(() => {
      setCards(cards.filter((item) => item._id !== card._id));
  })
    .catch(err => console.error(`Ошибка ${err} при удалении карточки.`))
    .finally(() => {setCardItem({})});
    closeAllPopups();
  }

  function handleAddPlaceSubmit({name, link}) {
    api.getAllCards({name: name, link: link})
    .then((newCard) => {setCards([newCard, ...cards])})
    .catch(err => console.error(`Ошибка ${err} при добавлении карточки.`));
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main onCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleDeletePopup}/>
      <Footer />

      <FormValidator >

        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

        <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />

        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

      </FormValidator>

      <DeletePopup onDeleteCard={handleCardDelete} isOpen={isDeletePopupOpen} onClose={closeAllPopups} card={cardItem} />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </div>
  </CurrentUserContext.Provider>
  );
}
