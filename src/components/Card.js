function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="elements__item">
      <img
        className="elements__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="elements__info">
        <h2 className="elements__place">{props.card.name}</h2>
        <button className="elements__btn-delete" type="button"></button>
        <div className="elements__like-container">
          <button className="elements__btn-like" type="button"></button>
          <p className="elements__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
