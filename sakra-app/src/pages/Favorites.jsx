import React from "react";
import { useSelector } from "react-redux";

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const newFavorites = [...new Set(favorites)];

  return (
    <div className="container" style={{ marginTop: "25px" }}>
      <div className="columns is-multiline">
        {newFavorites.map((favorite) => (
          <div className="column is-one-fifth card-hover">
            <div className="card hoper">
              <div className="card-image">
                <img src={favorite} alt="hehe" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
