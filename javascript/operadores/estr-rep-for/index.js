/*
Estrutura de repetição FOR
 */

const log = (...values) => console.log(...values)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i]
  log(element)
}
