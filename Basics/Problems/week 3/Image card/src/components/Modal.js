// Modal.js
import React, { useState } from "react";
import "./Modal.css";

function Modal({ image, closeModal, handleRate }) {
  const [rating, setRating] = useState(image.rating || 0);
  const handleRatingChange = (event) => {
    // TODO: Implement handleRatingChange
    const newRating = parseFloat(event.target.value);
    setRating(newRating);
    handleRate(image.id, newRating);
  };

  console.log(image);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* TODO: Add image */}
        {/* TODO: Add title */}
        <img src={image.src} alt={image.title} className="modal-image" />
        <h2>{image.title}</h2>
        <label htmlFor="rating">Rate:</label>
        <select id="rating" onChange={handleRatingChange} value={rating}>
          {/* TODO: Add rating options */}
          <option value="0">0</option>
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Modal;
