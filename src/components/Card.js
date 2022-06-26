export default function Card({data, onCardClick}) {

  function handleClick() {
    onCardClick(data);
  }

  return (
    <div className="card">
      <button className="card__del" type="button"></button>
      <img className="card__img" onClick={handleClick} src={data.link} alt={data.name} />
      <div className="card__description">
        <h2 className="card__title">{data.name}</h2>
        <div className="card__like-container">
          <button className="card__like " type="button"></button>
          <span className="card__like-count">{data.likes.length}</span>
        </div>
      </div>
    </div>)
}
