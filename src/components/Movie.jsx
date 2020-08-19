import React from 'react';

function Movie({ movieName, movieImg, movieDesc }) {
  return (
    <section className="movie-block">
      <img className="movie-block__image" src={movieImg} alt="Movie img" />
      <h4 className="movie-block__title">{movieName}</h4>
      <div className="movie-block__overlay">
        <p className="movie-block__desc">{movieDesc}</p>
      </div>
    </section>
  );
}

export default Movie;
