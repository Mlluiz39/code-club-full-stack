/*
Arrow Functions
*/

function sum (number1, number2) {
  const result = `A soma entre ${number1} e ${number2} = ${number1 + number2}`
  return result
}

console.log(sum(22, 20))

const sum2 = (number1, number2) => number1 + number2

console.log(sum2(2,5))

const sum3 = (number1, number2) => {
  const result = console.log(`A soma entre ${number1} e ${number2} = ${number1 + number2}`)
  return result
}

sum3(4,63)

const sum4 = number => console.log(`${number} + 10 = ${number + 10}`)

sum4(7)