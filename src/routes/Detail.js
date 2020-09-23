import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const DetailUnitBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 70px 30px 30px;
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  color: #fff;
  ${(props) =>
    props.backImg &&
    css`
      background-image: url(${props.backImg});
    `}
  }
  .wrap {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 1200px;
    .thumb {
      width: 30%;
      img {
        width: 100%;
        box-shadow: 8px 8px 20px rgba(0,0,0, .3);
        vertical-align: top;
      }
    }
    .txtInfo {
      width: calc(70% - 30px);
      margin-left: 30px;
      h1 {
        font-size: 35px;
      }
      ul {
        display: flex;
        align-items: center;
        margin-top: 10px;
        font-size: 13px;
        li + li {
          margin-left: 10px;
        }
      }
      .description {
        margin-top: 20px;
        font-size: 17px;
        line-height: 1.7em;
      }
      a {
        display: inline-block;
        margin-top: 30px;
        padding: 0 30px;
        box-shadow: 5px 5px 10px rgba(0,0,0,.5);
        border-radius: 5px;
        background-color: rgba(255,255,255,.8);
        color: ##000;
        font-size: 15px;
        line-height: 40px;
      }
    }
  }
`;

const DetailUnit = ({background_image, description_full, large_cover_image, title, genres}) => {
  if (!background_image) return '';
  return (
    <DetailUnitBlock backImg={background_image}>
      <div className="wrap">
        <div className="thumb">
          <img src={large_cover_image} />
        </div>
        <div className="txtInfo">
          <h1>{title}</h1>
          <ul>
            {genres.map((genre, i) => (
              <li key={i}>{genre}</li>
            ))}
          </ul>
          <div className="description">{description_full}</div>
          <Link to="/">back</Link>
        </div>
      </div>
    </DetailUnitBlock>
  );
}
const Detail = ({match, history}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState({});
  const getDetail = async (id) => {
    try {
      const {data: {data: {movie}}} = await Axios.get(
        `https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`
      );
      console.log(movie);
      setIsLoading(false);
      setMovieDetail(movie);
    } catch (e) {
      console.error(500, e);
    }
  };
  useEffect(() => {
    if (match.params === undefined) {
      history.push('/');
    }
    const { id } = match.params;
    getDetail(id);
  },[])
  return (
    <div>
      {isLoading ? 'loading' : 
      <DetailUnit
        background_image={movieDetail.background_image} 
        description_full={movieDetail.description_full} 
        large_cover_image={movieDetail.large_cover_image} 
        title={movieDetail.title} 
        genres={movieDetail.genres} />
      }
    </div>
  );
};

export default Detail;