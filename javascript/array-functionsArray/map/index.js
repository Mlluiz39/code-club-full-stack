/* 
Cria um novo array, a partir de um array existente, com os elementos que
 satisfazem uma condição.
 Cria um novo array, com a mesma quantidade de elementos do array original
 Aceita três parâmetros:
  - item: elemento atual
  - index: índice do elemento atual
  - array: array original
  - condition: função que retorna true ou false
  - callback: função que será executada para cada elemento do array
*/

const log = args => console.log(args)
const table = args => console.table(args)

const numbers = [25, 10, 42, 18, 30, 42]

const students = [
  { name: 'Luiz', age: 25 },
  { name: 'Maria', age: 10 },
  { name: 'Eduardo', age: 42 },
  { name: 'Letícia', age: 18 },
  { name: 'Rosana', age: 30 },
  { name: 'Marcelo', age: 42 },
]

log(numbers.map(number => number * 2))

const newArray1 = numbers.map(number => {
  const newNumber = number * 2 + 10 / 3
  return newNumber.toFixed(1)
})

log({ numbers, newArray1 })
/* 
const newStudents0 = students.map(student => ({name: student.name + ' Pereira', age: student.age + 1}))
envolvendo entre parênteses temos retorno implícito ou seja podemos retornar em 
uma única linha sem a palavra return
*/
const newStudents0 = students.map(student => ({
  name: student.name + ' Pereira',
  age: student.age + 1,
}))

log(newStudents0)

const newStudents = students.map(student => {
  const { name, age } = student
  return { name: `${name} de Souza`, age: age + 1 }
})

log({ students, newStudents })
table(newStudents)

/* 
Formas de escrever a mesma função
*/

const newArray2 = numbers.map(function (number) {
  return number * 2
})

const newArray3 = numbers.map(number => {
  return number * 3
})

const newArray4 = numbers.map(number => number * 4)

log({ newArray2, newArray3, newArray4 })

const doubleToNumbers = number => number * 2
const sumToNumbers = number => number + 10
const divideToNumbers = number => number / 2

const newArray5 = numbers
  .map(doubleToNumbers)
  .map(sumToNumbers)
  .map(divideToNumbers)

log({ numbers, newArray5 })

const numbersToValues = [20, 30, 10, 5]
const duble = number => number * 2
const toReal = number => `R$ ${number.toFixed(2)}`

const sum = numbersToValues.map(duble).map(toReal)

log({ numbersToValues, sum })
