import React from "react";

const Pizza = ({ pizza }) => {
  const { name, ingredients, price, photoName, soldOut } = pizza;
  return (
    <div className={`pizza ${pizza.soldOut && "soldOut"} `}>
      <img src={photoName} alt="" />
      <div className="content">
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Pizza;
