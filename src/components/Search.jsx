import React from 'react';

function Search() {
  return (
    <form className="search">
      <input
        className="search__input"
        maxLength="30"
        pattern="[а-яА-ЯёЁa-zA-Z0-9.,!?]+[а-яА-ЯёЁa-zA-Z0-9.,!? ]*"
        placeholder="Поиск..."
      />
      <button className="search__button">
        <span className="search__button-text">Найти</span>
      </button>
    </form>
  );
}

export default Search;
