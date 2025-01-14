import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import poster from "../assets/poster.png";

function SingleCard({ movie }) {
  const url = "https://image.tmdb.org/t/p/original"; // Image base URL

  function dateFormat(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" }; // Date format options
    const date = new Date(dateString); // Date object create karna
    return date.toLocaleDateString("en-US", options); // Localized date string
  }

  return (
    <>
      <div className="card-container">
        <div className="image">
          <img
            src={
              movie.poster_path
                ? url + movie.poster_path
                : movie.backdrop_path
                ? url + movie.backdrop_path
                : movie.known_for?.[0]?.poster_path
                ? url + movie.known_for[0].poster_path
                : poster
            }
            alt="movie image"
          />
          <div className="overlay">
            <div className="rating">
              <CircularProgressbar
                value={movie.vote_average ? movie.vote_average * 10 : 5 * 10}
                text={
                  movie.vote_average
                    ? movie.vote_average.toFixed(1)
                    : (5.5).toFixed(1)
                }
                strokeWidth={10}
                styles={buildStyles({
                  pathColor: `${
                    movie.vote_average > 6.9
                      ? "rgb(0, 128, 0)"
                      : "rgb(255, 165, 0)"
                  }`,
                  textColor: "rgb(0, 128, 0)",
                  textSize: "35px",
                })}
              />
            </div>

            <div className="genre">
              <p>Action</p>
              <p>Adventure</p>
            </div>
          </div>
        </div>

        <div className="movie-info">
          <p>
            {movie.title ||
              movie.original_title ||
              movie.name ||
              movie.original_name}
          </p>
          <p>
            {movie.release_date
              ? dateFormat(movie.release_date)
              : movie.first_air_date
              ? dateFormat(movie.first_air_date)
              : movie.known_for?.[0]?.release_date
              ? dateFormat(movie.known_for[0].release_date)
              : "unKnown"}
          </p>
        </div>
      </div>
    </>
  );
}

export default SingleCard;
