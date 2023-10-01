/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count) ||
      personalMovieDB.count <= 0
    ) {
      // alert("Wrong answer! Try again");
      personalMovieDB.count = prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      ).trim();
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = prompt("На сколько оцените его?", "").trim();

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("DONE");
      } else {
        console.log("ERROR");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('"Просмотрено довольно мало фильмов"');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else console.log("Произошла ошибка");
  },

  showMyDB: function (obj) {
    if (!obj) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      const genres = prompt(
        "ВВедите Ваши любимые жанры через запятую"
      ).toLowerCase();
      // .trim();

      if (genres !== "" && genres !== null && typeof genres === "string") {
        personalMovieDB.genres = genres.split(",");
        personalMovieDB.genres.sort();
      } else {
        console.log("Wrong GENRE Type");
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
    // for (let i = 1; i <= 3; i++) {
    //   const a = prompt(`Ваш любимый жанр под номером ${i}`, "").trim();

    //   if (a !== "" && a !== null && typeof a === "string") {
    //     personalMovieDB.genres[i - 1] = a;
    //   } else {
    //     console.log("Wrong GENRE Type");
    //     i--;
    //   }
    // }
    // personalMovieDB.genres.forEach((item, i) => {
    //   console.log(`Любимый жанр ${i + 1} - это ${item}`);
    // });
  },
};

// personalMovieDB.rememberMyFilms();
// personalMovieDB.toggleVisibleMyDB();

// let count = 0;
// while (count < 2) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("DONE");
//     count++;
//   } else {
//     console.log("ERROR");
//   }
// }
