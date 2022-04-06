import React from "react";

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image_url} alt={item.name} />
    </div>
  );
}

export default Card;
