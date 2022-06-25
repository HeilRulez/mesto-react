export default function Card(props) {

  function handleClick() {
    props.onCardClick(props.data.link);
  }

  return (
    <div className="card">
      <button className="card__del" type="button"></button>
      <img className="card__img" onClick={handleClick} style={{backgroundImage:`url(${props.data.link})`}} alt={props.data.name} />
      <div className="card__description">
        <h2 className="card__title">{props.data.name}</h2>
        <div className="card__like-container">
          <button className="card__like " type="button"></button>
          <span className="card__like-count">{props.data.likes.length}</span>
        </div>
      </div>
    </div>)
}
