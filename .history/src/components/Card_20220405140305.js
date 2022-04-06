import React from "react";

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image_url} alt={item.name} />
      <div className="card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default Card;
