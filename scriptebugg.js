// let number = 5
// debugger
// function logNumber() {
// 	// let number = 4
// 	// debugger
// 	console.log(number)
// 	debugger
// }
// number = 6
// logNumber()
// debugger
// number = 8
// logNumber()
// debugger

// function createCounter() {
// 	let counter = 0
// 	const myFunction = function () {
// 		debugger
// 		counter = counter + 1
// 		debugger
// 		return counter
// 	}
// 	return myFunction
// }
// debugger
// const increment = createCounter()
// debugger
// const c1 = increment()
// debugger
// const c2 = increment()
// debugger
// const c3 = increment()
// debugger
// console.log(c1, c2, c3)

let c = 4
function addX(x) {
	return function (n) {
		return n + x
	}
}
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)

// function ask(question, ...handlers) {
// 	let isYes = confirm(question)

// 	for (let handler of handlers) {
// 		if (handler.length == 0) {
// 			if (isYes) handler()
// 		} else {
// 			handler(isYes)
// 		}
// 	}
// }

// // для положительных ответов вызываются оба типа обработчиков
// // для отрицательных - только второго типа
// ask(
// 	'Вопрос?',
// 	() => alert('Вы ответили да'),
// 	result => alert(result)
// )
console.log(2 && 1 && null && 0 && undefined)
const a = 1
b = 1
console.log(!!(a && b))
console.log(a && b)
// let x = 5
// alert(++x)
console.log([] + false - null + true)
let y = 1
let x = (y = 2)
// alert(x)
// console.log([] + 1 + 2)
console.log(typeof +'Infinity')
// number
console.log(0 || '' || 2 || undefined || true || falsе)
// false || false || 2 and stop calculating... answer 2
