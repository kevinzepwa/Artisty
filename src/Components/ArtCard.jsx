import { useState } from "react";

function ArtCard({ art }) {
  const { name, image, price, description } = art;

  const [isAvailable, setAvailable] = useState(true);
  const [liked, setLiked] = useState(true);

  function handleToggleAvailable() {
    setAvailable((isAvailable) => !isAvailable);
  }
  function handleLike() {
    setLiked((isLiked) => !isLiked);
  }

  return (
    <li className="card">
      <img className="h-45" src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      {isAvailable ? (
        <button className="primary p-2 mr-2" onClick={handleToggleAvailable}>
          Art is available
        </button>
      ) : (
        <button onClick={handleToggleAvailable}>We have just sold it</button>
      )}
      <button className="primary p-2 ml-2" onClick={handleLike}>
          Like
        </button>
    </li>
  );
}

export default ArtCard;
