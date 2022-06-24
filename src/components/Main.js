export default function Main(props) {

    return (
      <main>
        <section className="profile">
          <button className="profile__avatar" onClick={props.onEditAvatar}>
            <div className="profile__avatar-edit"></div>
          </button>
          <div className="profile-info">
            <div className="profile-info__conteiner">
              <h1 className="profile-info__name"></h1>
              <button className="profile-info__btn" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile-info__description"></p>
          </div>
            <button className="profile__add-btn" type="button" onClick={props.onAddPlace}></button>
        </section>

        <section className="cards"></section>
    </main>
    )
};

