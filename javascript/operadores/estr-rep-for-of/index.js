/*
Estrutura de repetição FOR OF
*/

const log = (...values) => console.log(...values)

let myName = 'Marcelo Luiz'
let allNames = ['Julia', 'Caique', 'Luiz', 'Souza', 'Pedro']

for (const name of allNames) {
  log({ name })
}
