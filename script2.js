"use strict";

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

function sayHello(name) {
  return "Привет " + `${name}`;
}

sayHello("Masha");
console.log(sayHello("Masha"));

function returnNeighboringNumbers(numb) {
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

//1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
function calculateVolumeAndArea(data) {
  if (data < 0 || typeof data !== "number" || !Number.isInteger(data)) {
    return "При вычислении произошла ошибка";
  } else {
    let v = data * data * data,
      s = 6 * (data * data);
    return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
  }
}
console.log(calculateVolumeAndArea(15));

function getCoupeNumber(seatNumber) {
  if (
    typeof seatNumber !== "number" ||
    seatNumber < 0 ||
    !Number.isInteger(seatNumber)
  ) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (seatNumber === 0 || seatNumber > 36) {
    return "Таких мест в вагоне не существует";
  }

  return Math.ceil(seatNumber / 4);
  // тут очень много вариантов решения, но выбрал один из элегантных :)
}

console.log(getCoupeNumber(32));

function getTimeFromMinutes(time) {
  if (typeof time !== "number" || time < 0 || !Number.isInteger(time)) {
    return "Ошибка. Проверьте правильность введенного времени";
  }

  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  let hoursStr = "";

  switch (hours) {
    case 0:
      hoursStr = "часов";
      break;
    case 1:
    case 21:
      hoursStr = "час";
      break;
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
    case 24:
      hoursStr = "часа";
      break;
    default:
      hoursStr = "часов";
  }

  // return `Это ${hours} ${hoursStr} и ${minutes} минут`;
  if (hours > 24) {
    let days = Math.floor(hours / 24);
    hours = hours % 24;
    switch (hours) {
      case 0:
        hoursStr = "часов";
        break;
      case 1:
      case 21:
        hoursStr = "час";
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
        hoursStr = "часа";
        break;
      default:
        hoursStr = "часов";
    }
    return `"Это ${days} days  ${hours} ${hoursStr} и ${minutes} минут`;
  }
  return `"Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(7126));

//*   Fibonacci
function fib(num) {
  if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
    return "";
  }

  let result = "";
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += `${first}`;
      // Без пробела в конце
    } else {
      result += `${first} `;
    }

    let third = first + second;
    first = second;
    second = third;
  }

  return result;
}

console.log(fib(6));

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (data) {
    const { age } = data;
    const { languages } = data.skills;
    let str = `Мне ${age} и я владею языками: `;
    // let langStr = "";
    // languages.forEach((a) => (langStr += `${a.toUpperCase()} `));
    // return str + langStr;
    languages.forEach((a) => (str += `${a.toUpperCase()} `));
    return str;
  },
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
  const { exp } = plan.skills;
  // console.log("typeof exp", typeof exp);
  return exp;
}
// console.log(showExperience(personalPlanPeter));

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs(plan) {
  const { programmingLangs } = plan.skills;
  let result = "";

  for (let key in programmingLangs) {
    result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return result;
}

// console.log(showProgrammingLangs(personalPlanPeter));

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// * Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let str = "Семья состоит из: ";
  if (arr.length === 0) {
    return "Семья пуста";
  }
  arr.forEach((a) => (str += `${a} `));
  return str;
}
console.log(showFamily(family));
const asss = [];
console.log(showFamily(asss));
