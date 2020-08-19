import React from 'react';

function Genre({ genreName, genreEmoji }) {
  return (
    <div className={`genre-block ${genreEmoji}`}>
      <span className="genre-block__emoji">{genreEmoji}</span>
      <h4 className="genre-block__title">{genreName}</h4>
    </div>
  );
}

export default Genre;
