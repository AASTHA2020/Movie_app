import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearchTerm } from "../Store/slice";
import SingleCard from "./SingleCard";

function SearchResults() {
  const { searchTerm } = useParams(); // URL se search term ko extract karna
  const dispatch = useDispatch(); // Redux se action dispatch karne ke liye useDispatch hook ka use

  // Search term ko fetch karne ke liye useEffect hook ka use
  useEffect(() => {
    dispatch(fetchSearchTerm(searchTerm));
  }, [dispatch, searchTerm]);

  const { searchResults } = useSelector((state) => state.movieReducer); // Redux state se search results ko select karna
  console.log(searchResults);

  return (
    <>
      <div className="searchResult-container">
        <h1>{`Search Results for '${searchTerm}'`}</h1>
        <div className="display-movies">
          {searchResults && searchResults.map((movie, index) => {
            return <SingleCard movie={movie} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
