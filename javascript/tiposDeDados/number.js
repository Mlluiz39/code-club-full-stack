const numberOne = 42
const numberTwo = '234'
const numberFour = +'203'
const numberSix = '1.234'  // pode ser números fracionados
let numberThree = numberOne + numberTwo
let numberFive = numberOne + numberFour
const numberZero = 29
const myString = 'abc'
const result = numberZero / myString

console.log(numberOne)
console.log(numberTwo)
console.log(numberSix)
console.log(typeof numberOne, numberOne)
console.log(typeof numberTwo, numberTwo)
console.log(typeof numberThree, numberThree) // aqui o resultado é string, pois o tipo de dado string somado com o tipo de dado number é string
console.log(typeof numberFive, numberFive) // aqui o resultado é number, pois o sinal de + converte o tipo de dado string para number
console.log(typeof result, result) // aqui o resultado é not a number, pois o tipo de dado number dividido por string é not a number
