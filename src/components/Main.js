export default function Main() {
  function handleEditAvatarClick() {
    const popup = document.querySelector('.overlay_for_avatar');
    popup.classList.add('.overlay_for_avatar');
  }

  function handleEditProfileClick() {
    const popup = document.querySelector('.overlay_for_profile');
    popup.classList.add('.overlay_for_profile');
  }

  function handleAddPlaceClick() {
    const popup = document.querySelector('.overlay_for_addCard');
    popup.classList.add('.overlay_for_addCard');
  }

    return (
      <main>
        <section className="profile">
          <button className="profile__avatar">
            <div className="profile__avatar-edit"></div>
          </button>
          <div className="profile-info">
            <div className="profile-info__conteiner">
              <h1 className="profile-info__name"></h1>
              <button className="profile-info__btn" type="button"></button>
            </div>
            <p className="profile-info__description"></p>
          </div>
            <button className="profile__add-btn" type="button"></button>
        </section>

        <section className="cards"></section>
    </main>
    )
};

