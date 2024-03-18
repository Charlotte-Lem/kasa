// BackgroundImage.jsx
import React from "react";

function BackgroundImage({ image, text }) {
  return (
    <div
      className="background-img"
      style={{ backgroundImage: `url(${image})` }}
    >
      {text !== undefined && text !== null && text !== "" && (
        <div className="text-overlay">{text}</div>
      )}
    </div>
  );
}

export default BackgroundImage;
