// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно

"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("DONE");
  } else {
    console.log("ERROR");
    i--;
  }
}

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

if (personalMovieDB.count < 10) {
  console.log('"Просмотрено довольно мало фильмов"');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else console.log("Произошла ошибка");

console.log("personalMovieDB", personalMovieDB);

function sayHello(name) {
  return "Привет " + `${name}`;
}

sayHello("Masha");
console.log(sayHello("Masha"));

function returnNeighboringNumbers(numb) {
  // let arr = [];
  // arr[0] = numb - 1;
  // arr[1] = numb;
  // arr[2] = numb + 1;
  return [numb - 1, numb, numb + 1];
}

function getMathResult(base, increase) {
  if (increase <= 0 || typeof increase !== "number") {
    // console.log(base);
    return base;
  }
  let str = "";

  for (let i = 1; i <= increase; i++) {
    if (i === increase) {
      str += base * i;
    } else str += `${base * i}---`;
  }
  return str;
}

console.log(getMathResult(14, 22));
console.dir(Number);
