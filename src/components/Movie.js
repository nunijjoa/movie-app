import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MovieBlock = styled.div`
  position: relative;
  box-sizing: border-box;
  width: calc((100% - 30px) / 2);
  height: 250px;
  margin-top: 50px;
  padding: 10px 20px 20px 190px;
  background-color: #fff;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.25);
  @media (max-width: 480px) {
    height: auto;
    padding-left: 40%;
  }
  &:hover {
    .img {
      transform: translateY(-10px);
    }
  }
  :nth-child(even) {
    margin-left: 30px;
  }
  .tit {
    font-size: 19px;
    color: #222;
  }
  .year {
    margin-top: 10px;
    font-size: 13px;
    color: #999;
  }
  .genres {
    display: flex;
    flex-wrap: wrap;
    margin-top: 7px;
    span + span {
      margin-right: 10px;
    }
    font-size: 13px;
    color: #666;
  }
  .summary {
    display: -webkit-box;
    display: box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    margin-top: 15px;
    font-size: 15px;
    line-height: 1.5em;
    color: #333;
  }
  .img {
    position: absolute;
    top: -30px;
    left: 20px;
    width: 150px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.2s linear;
    @media (max-width: 480px) {
      top: -15px;
      width: 30%;
    }
    img {
      width: 100%;
      vertical-align: top;
    }
  }
  @media (max-width: 830px) {
    width: 100%;
    :nth-child(even) {
      margin-left: 0;
    }
  }
`;

const Movie = ({ id, title, year, summary, poster, genres}) => {
  return (
    <MovieBlock>
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            id,
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <div>
          <h1 className="tit">{title}</h1>
          <p className="year">{year}</p>
          <p className="genres">
            {genres.map((genre, i) => (
              <span key={i}>{genre}</span>
            ))}
          </p>
          <p className="img">
            <img src={poster} alt={title} />
          </p>
          <div className="summary">{summary}</div>
        </div>
      </Link>
    </MovieBlock>
  );
};

Movie.prototype = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;