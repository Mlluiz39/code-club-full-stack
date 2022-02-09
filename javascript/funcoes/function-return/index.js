/*
function Return
*/

function sum(number1, number2) {
  const result = `A soma entre ${number1} e ${number2} = ${number1 + number2}`
  return result
}

const numberOne = 10
const numberTwo = 20

console.log(`O primeiro numero é ${numberOne}`)
console.log(`O segundo numero é ${numberTwo}`)

console.log(sum(numberOne, numberTwo))
