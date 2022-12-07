import { useState } from "react";

function ArtCard({ art }) {
  const { name, image, price } = art;

  const [isAvailable, setAvailable] = useState(true);

  function handleToggleAvailable() {
    setAvailable((isAvailable) => !isAvailable);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isAvailable ? (
        <button className="primary" onClick={handleToggleAvailable}>
          Art is available
        </button>
      ) : (
        <button onClick={handleToggleAvailable}>We have just sold it</button>
      )}
    </li>
  );
}

export default ArtCard;
