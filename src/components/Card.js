import React from "react";

function Card({ data }) {
  return (
    <div className="Card">
      <h2 className="cardTitle">{data.title}</h2>
      {/* <p>{data.description}</p> */}
      {/* <img src={data.image} alt={data.title} /> */}
    </div>
  );
}

export default Card;
