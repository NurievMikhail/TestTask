import React from 'react';

function Search() {
  return (
    <div className="search">
      <input placeholder="Поиск..." />
      <button className="search__button">
        <span>Найти</span>
      </button>
    </div>
  );
}

export default Search;
