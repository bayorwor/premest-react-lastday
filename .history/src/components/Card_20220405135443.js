import React from "react";

function Card({ item }) {
  return (
    <div>
      <h1>{item.name}</h1>
      {/* <p>{item.printnumber}</p> */}
    </div>
  );
}

export default Card;
