import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

const MovieWrapBloack = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 70px;
  background-color: #f2f2f2;
  @media (max-width: 830px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const LoadingBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 30px;
  color: #000;
  text-align: center;
`;

const Home = () => {
  const [isLoading, setIsLoadig] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMoviews = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await Axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    setIsLoadig(false);
    setMovies(movies);
  };
  useEffect(() => {
    getMoviews();
  }, []);
  return (
    <MovieWrapBloack>
      {isLoading ? (
        <LoadingBlock>Loading</LoadingBlock>
      ) : (
        movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          );
        })
      )}
    </MovieWrapBloack>
  );
};

export default Home;