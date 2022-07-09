import {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function Card({data, onCardClick}) {

  const currentUserContext = useContext(CurrentUserContext);
  const isOwn = data.owner._id === currentUserContext._id;
  const cardDelBtnClassName = (`card__del ${!isOwn && 'card__del_hidden'}`);
  const isLiked = data.likes.some(current => current._id === currentUserContext._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  // const cardLikeBtnClassName = (`card__like ${isOwn && 'card__like_active'}`);

  function handleClick() {
    onCardClick(data);
  }

  return (
    <div className="card">
      <button className={cardDelBtnClassName} type="button"></button>
      <img className="card__img" onClick={handleClick} src={data.link} alt={data.name} />
      <div className="card__description">
        <h2 className="card__title">{data.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeBtnClassName} type="button"></button>
          <span className="card__like-count">{data.likes.length}</span>
        </div>
      </div>
    </div>)
}
