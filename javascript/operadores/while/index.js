/*
Estrutura de repetição while(condição enquanto)
*/

const log = (...values) => console.log(...values)

let i = 1
let value = 2398532734592

while (i <= 10) {
  log(i)
  i++
}

while (value > 1) {
  log(value)
  value /= 2
}
