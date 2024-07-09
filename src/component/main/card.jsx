import React from "react";
import "./card.css";

const Card = ({ img, text }) => {
  return (
    <div
      id="card"
      className="bg-[#ecf1f8] inline-flex flex-col rounded-xl px-3 pt-2 pb-3 items-end justify-between min-w-40 aspect-square">
      <p id="text" className="text-[#282828] font-outfit text-sm leading-tight">
        {text}
      </p>
      <img
        src={img}
        alt="${img}-icon"
        className="w-7 bg-white rounded-full p-1"
      />
    </div>
  );
};

export default Card;
