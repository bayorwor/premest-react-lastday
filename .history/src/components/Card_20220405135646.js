import React from "react";

function Card({ item }) {
  return (
    <div>
      <img src={item.image_url} alt={item.name} />
    </div>
  );
}

export default Card;
