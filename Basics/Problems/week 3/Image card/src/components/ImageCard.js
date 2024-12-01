// ImageCard.js
import React from "react";
import "./ImageCard.css";

function ImageCard({ image, openModal, handleRate }) {
  const handleClick = () => {
    // TODO: Implement handleClick
    openModal(image.id);
  };

  const handleRatingChange = (event) => {
    // TODO: Implement handleRatingChange
  };

  const calculateAverageRating = () => {
    return image.rating.toFixed(1) || 0.0;
    // TODO: Implement calculateAverageRating
  };

  return (
    <div className="image-card" onClick={handleClick}>
      {/* TODO: Add image */}
      <img src={image.src} alt={image.title} />
      {/* TODO: Add title */}
      <h3>{image.title}</h3>
      <div className="rating">
        {/* TODO: Add rating display */}

        <span>Rating: {calculateAverageRating()}</span>
      </div>
    </div>
  );
}

export default ImageCard;
