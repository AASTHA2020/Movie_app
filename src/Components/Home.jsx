import { useDispatch, useSelector } from "react-redux";
import Hero from "./Hero";
import { fetchTrending, fetchPopular, fetchTopRated } from "../Store/slice";
import Display from "./Display";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch(); // Redux se action dispatch karne ke liye useDispatch hook ka use
  const {
    trendingMovieByDay,
    trendingMovieByWeek,
    popularMovies,
    popularTVShows,
    topRatedMovies,
    topRatedTVShows,
  } = useSelector((state) => state.movie); // Redux state se data select karne ke liye useSelector hook ka use

  // Trending movies fetch karne ke liye useEffect hook ka use
  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  // Popular movies fetch karne ke liye useEffect hook ka use
  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  // Top rated movies fetch karne ke liye useEffect hook ka use
  useEffect(() => {
    dispatch(fetchTopRated());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Display
        heading="Trending"
        data1="Day"
        data2="Week"
        option1={trendingMovieByDay}
        option2={trendingMovieByWeek}
      />
      <Display
        heading="What's Popular"
        data1="Movies"
        data2="TVShows"
        option1={popularMovies}
        option2={popularTVShows}
      />
      <Display
        heading="Top Rated"
        data1="Movies"
        data2="TVShows"
        option1={topRatedMovies}
        option2={topRatedTVShows}
      />
    </>
  );
}

export default Home;
