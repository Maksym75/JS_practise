// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно

"use strict";

let numberOfFilms;

function start() {
  while (
    numberOfFilms == "" ||
    numberOfFilms == null ||
    isNaN(numberOfFilms) ||
    numberOfFilms <= 0
  ) {
    // alert("Wrong answer! Try again");
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "").trim();
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function showMyDB(obj) {
  if (!obj) {
    console.log(obj);
  }
}

function rememberMyFilms() {
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
}

rememberMyFilms();

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
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('"Просмотрено довольно мало фильмов"');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else console.log("Произошла ошибка");
}
detectPersonalLevel();

function writeYourGenres(obj) {
  for (let i = 1; i <= 3; i++) {
    const a = prompt(`Ваш любимый жанр под номером ${i}`, "").trim();

    if (a !== "" && a !== null && typeof a === "string") {
      obj.genres[i - 1] = a;
    } else {
      console.log("Wrong GENRE Type");
      i--;
    }
  }
}

// showMyDB(personalMovieDB1);

writeYourGenres(personalMovieDB);
showMyDB(personalMovieDB);
console.log("personalMovieDB", personalMovieDB);

function BinarySearch(t, A) {
  // t - искомый элемент,
  // A - упорядоченный массив, в котором ищем.
  let i = 0,
    j = A.length - 1,
    k;

  while (i <= j) {
    k = Math.floor((i + j) / 2);
    if (t === A[k]) return k;
    else if (t < A[k]) j = k - 1;
    else i = k + 1;
  }
  // На выходе индекс искомого элемента.
  return -1; // Если искомого элемента нет в массиве, то -1.
}

const ar = [-190, -22, 2, 9, 16, 87, 945, 1000];

// console.log(BinarySearch(87, ar));

const personalMovieDB1 = {
  count: 99,
  movies: { СтарТрек: 7.9, "Need for Speed": 9.99 },
  actors: {},
  genres: ["Action", "Criminal"],
  maketest: () => console.log("Test"),
  privat: false,
};
//??   Подсчёт количества элементов (1 уровень вложенности) в Объекте  =====================================================
// console.log(Object.keys(personalMovieDB1).length);

//??   Подсчёт количества элементов (2 уровень вложенности) в Объекте  =====================================================
// console.log(Object.keys(personalMovieDB1.movies).length);

//?? 1 Поверхностное  Копирование Объекта  =====================================================
function copyObject(mainObj) {
  let copiedObj = {};
  let key;
  for (key in mainObj) {
    copiedObj[key] = mainObj[key];
  }
  return copiedObj;
}
// console.log(copyObject(personalMovieDB1));
//?? 2 Поверхностное  Копирование Объекта  =====================================================
const clone = Object.assign({}, personalMovieDB1);
clone.count = 7;
console.log(clone);
console.log(personalMovieDB1);
// personalMovieDB1.maketest();

//?? 3 Поверхностное  Копирование Массива  =====================================================
const oldArray = ["b", "a", "g"];
const copiedArray = oldArray.slice();
copiedArray[0] = "a";
console.log(oldArray);
console.log(copiedArray);

//?? 4 Поверхностное  Копирование  =====================================================
const video = ["youtube", "vimeo", "rutube"],
  bloggs = ["wordpress", "livejournal", "blogger"],
  // internet = [];
  internet = [...bloggs, ...video];
const arrr = ["Start", ...internet, "Finish"];
console.log(internet);
console.log(arrr);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const numbers = [5, 88, 32, -1];
log(...numbers);

const copyNumbers = [...numbers];
console.log("copyNumbers", copyNumbers);

const cloneObject = { ...personalMovieDB1 };
console.log("cloneObject", cloneObject);
