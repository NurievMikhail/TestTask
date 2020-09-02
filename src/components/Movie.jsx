import React from 'react';

function Movie({ movieName, movieImg, movieDesc }) {
  return (
    <section className="movie-block">
      <img className="movie-block__image" src={movieImg} alt="Movie img" />
      <h3 className="movie-block__title">{movieName}</h3>
      <div className="movie-block__overlay">
        <p className="movie-block__desc">{movieDesc}</p>
      </div>
    </section>
  );
}

export default Movie;
