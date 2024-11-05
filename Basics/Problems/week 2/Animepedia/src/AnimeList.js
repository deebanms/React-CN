import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const anime = this.props.anime;
    return (
      <div className="anime-list">
        {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
        {anime.map((anim, index) => (
          <AnimeCard key={index} name={anim.name} image={anim.image} />
        ))}
      </div>
    );
  }
}

export default AnimeList;
