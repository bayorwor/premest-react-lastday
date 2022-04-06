import React from "react";

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image_url} alt={item.name} />
      <div className="card-content">
        <h5>{item.name}</h5>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default Card;
