import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Create Lifecycle method to prevent re render of the list if some spaces are present.
  // Use the shouldComponentUpdate lifecycle method here
  // Step1: Ensure valid images are at least 5 characters long and have no leading/trailing spaces
  // Step2: Only re-render if all images are valid
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    // Step 1: Check if all images in nextProps are valid (no extra spaces and at least 5 characters)
    return nextProps.images.every((image) => {
      // Trim spaces and check if the length is at least 5
      return image.trim().length >= 5;
    });
  }

  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
