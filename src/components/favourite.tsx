import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
const items = [
  { name: "Potato", id: uuid() },
  { name: "Carrot", id: uuid() },
  { name: "Pepper", id: uuid() },
  { name: "Egglant", id: uuid() },
  { name: "Onion", id: uuid() },
  { name: "Garlic", id: uuid() },
];
const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const toggleInFavourites = (id: string) => {
    let favouriteItem: any;
    const isItemFavourite = favourites.find(
      (favourite: any) => favourite.id === id,
    );

    if (isItemFavourite) {
      favouriteItem = favourites.filter(
        (favourite: any) => favourite.id !== id,
      );
    } else {
      favouriteItem = [
        ...favourites,
        items.find((item: any) => id === item.id),
      ];
    }
    setFavourites(favouriteItem);
  };
  return (
    <div className="fav">
      <div className="container">
        <ul className="ingridients">
          {items.map(({ id, name }) => (
            <li
              key={id}
              className="ingridient"
              onClick={() => toggleInFavourites(id)}
            >
              {name}
              <span className="star">
                {favourites.find((favourite: any) => favourite.id === id)
                  ? "🌕"
                  : "🌑"}
              </span>
            </li>
          ))}
        </ul>
        <div className="favourites">
          <p>My Favourites</p>
          <TransitionGroup>
            {favourites.map(({ id, name }) => (
              <CSSTransition timeout={500} classNames="fade" key={id}>
                <div key={id} className="favourite">
                  {name}
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
