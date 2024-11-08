import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [], // State to store fetched photos
      loading: false, // State to manage loading status
    };
  }

  // Use the required lifecycle methods here
  // Make an API call to fetch images and update state accordingly
  // Ensure that loading is set to true before the API request and false after data is fetched
  componentDidMount() {
    // Set loading to true before starting the fetch
    this.setState({ loading: true });

    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ photos: data, loading: false }); // Set images and reset loading to false
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        this.setState({ loading: false }); // Set loading to false in case of an error
      });
  }

  render() {
    const { loading, photos } = this.state;
    return (
      <div>
        {loading ? (
          <p>Loading...</p> // Display loading message
        ) : (
          <div className="App">
            {photos.map((photo) => (
              <Image key={photo.id} photo={photo} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
