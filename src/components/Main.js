import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onAddPlace, onEditAvatar, onEditProfile, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  function setUserInfo() {
    api
      .getUserInfo()
      .then((user) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch((err) => console.log(`ALLARM ${err}`));
  }

  function setAllCards() {
    api
      .getAllCArds()
      .then((card) => {
        setCards(card);
        //console.log(card);
      })
      .catch((err) => console.log(`ALLARM ${err}`));
  }

  useEffect(() => {
    setUserInfo();
    setAllCards();
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <button
            className="profile__btn-avatar-edit"
            type="button"
            onClick={onEditAvatar}
          >
            <img
              //   style={{ backgroundImage: `url(${userAvatar})` }}
              className="profile__avatar"
              src={userAvatar}
              alt="Аватар"
            />
          </button>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__btn-edit"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button
            className="profile__btn-add"
            type="button"
            onClick={onAddPlace}
          ></button>
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
