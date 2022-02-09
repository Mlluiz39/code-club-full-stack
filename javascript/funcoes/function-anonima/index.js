/*
function Anonima
*/

function sum(number1, number2) {
  const value = `A soma entre ${number1} e ${number2} = ${number1 + number2}`
  return value
}

const numberOne = 10
const numberTwo = 20

const result = sum(numberOne, numberTwo)

console.log(`O primeiro numero é ${numberOne}`)
console.log(`O segundo numero é ${numberTwo}`)

console.log(result)

/////////////////////////// Function Anonimas /////////////////////////////////

const sum2 = function(number1, number2) {
  const value = `A soma entre ${number1} e ${number2} = ${number1 + number2}`
  return value
}

const result2 = sum2(5,7)

console.log(result2)
