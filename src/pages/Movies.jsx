import React from 'react';

import { Movie, Genre } from '../components';

import mult from '../assets/img/mult.jpg';
import bat from '../assets/img/bat.jpg';
import once from '../assets/img/once.jpg';
import strip from '../assets/img/strip.jpg';

function Movies() {
  const NEW_MOVIES = [
    {
      movieName: 'Мульт в кино. Выпуск №103. Некогда грустить!',
      movieImg: mult,
      movieDesc: 'Описание',
    },
    {
      movieName: 'Новый Бэтмен',
      movieImg: bat,
      movieDesc: 'Описание',
    },
    {
      movieName: 'Однажды... в Голливуде',
      movieImg: once,
      movieDesc:
        'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». По сюжету, известный ТВ актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
    },
    {
      movieName: 'Стриптизёрши',
      movieImg: strip,
      movieDesc: 'Описание',
    },
  ];
  const GENRES = [
    {
      genreName: 'Комедии',
      genreEmoji: '😁',
    },
    {
      genreName: 'Драмы',
      genreEmoji: '😭',
    },
    {
      genreName: 'Фантастика',
      genreEmoji: '👽',
    },
    {
      genreName: 'Ужасы',
      genreEmoji: '👻',
    },
  ];

  return (
    <main className="container">
      <h2 className="content__title">🔥 Новинки</h2>
      <ul className="content__items">
        {NEW_MOVIES.map(({ movieName, movieImg, movieDesc }, index) => (
          <li key={`${movieName}_${index}`}>
            <Movie movieName={movieName} movieImg={movieImg} movieDesc={movieDesc} />
          </li>
        ))}
      </ul>
      <h2 className="content__title">Жанры</h2>
      <ul className="content__items">
        {GENRES.map(({ genreName, genreEmoji }, index) => (
          <li key={`${genreName}_${index}`}>
            <Genre genreName={genreName} genreEmoji={genreEmoji} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Movies;
