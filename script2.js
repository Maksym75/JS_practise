/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log("personalMovieDB", personalMovieDB);

console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log((!1 && 2) || !3);
console.log(!3);
console.log(!1 || 2);

console.log(25 || (null && !3));

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || (null && !3 && undefined) || 5);

console.log((5 === 5 && 3 > 1) || 5);
console.log((5 === 5 && 3 < 1) || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

console.log((true && 0) || (true && 2));

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log("Done!");
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if ((hamburger && cola) || (fries === 3 && nuggets)) {
  console.log("Done!");
} else {
  console.log("Not Done");
}

function firstTask() {
  // Пишем решение вот тут
  for (let i = 5; i < 11; i++) {
    console.log(i);
  }
}

firstTask();

// function secondTask() {

//   for (let i = 20; i > 9; i--) {
//     console.log(i);
//   }
// }

function secondTask() {
  for (let i = 20; i > 11; i--) {
    if (i === 13) {
      break;
    }
    console.log(i);
  }
}
// function secondTask() {
//   for (let i = 20; i >= 10; i--) {
//     if (i === 13) break;
//     console.log(i);
//   }
// }
secondTask();

function thirdTask() {
  // Пишем решение вот тут
  for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
thirdTask();

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourTask() {
  let i = 2;
  while (i <= 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
      i++;
    }
  }
}
fourTask();

function fifthTask() {
  const arrayOfNumbers = [];
  let count = 0;
  // Пишем решение вот тут
  for (let i = 5; i < 11; i++) {
    arrayOfNumbers[count] = i;
    count++;
  }

  // Не трогаем
  console.log("arrayOfNumbers", arrayOfNumbers);
  return arrayOfNumbers;
}

fifthTask();

function firstTask1() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  // Пишем решение вот тут
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }

  // Не трогаем
  console.log("result", result);
  return result;
}
firstTask1();

function secondTask1() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, "Shopping", 20, "Homework", [8, 6, 8]];

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "string") {
      data[i] = `${data[i]} - done`;
    } else if (typeof data[i] === "number") {
      data[i] = data[i] * 2;
    }
  }
  console.log(data);
  return data;
}
secondTask1();

function thirdTask() {
  const data = [5, 10, "Shopping", 20, "Homework"];
  const result = [];

  for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
  }
  return result;
}
