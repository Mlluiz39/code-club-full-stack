/*
Array - Métodos
*/

const log = (args) => console.log(args)

const students = ['Marcelo', 'Julia', 'Elaine', 'Alex']

//push - adiciona um elemento no final do array
students.push('Marilene')
log(students)

//length - retorna o tamanho do array
log(students.length)

//sort - ordena o array por ordem alfabética
students.sort()
log(students)

//delete - deleta um elemento do array pelo índice e retorna o valor excluído
delete students[1]
log(students)

//splice - remove elementos do array e retorna um novo array (unir / ligar)
students.splice(1, 1)
log(students)

//splice também pode adicionar elementos
students.splice(1, 0, 'Nego')
log(students)

/*
slice - retorna um novo array a partir de um determinado índice (fatiar)
aqui ele precisa de uma variável pois cria um novo array
*/
const newStudents = students.slice(1, 3)  // aqui ele para no índice 3
log(newStudents)

//join - transforma um array em uma string separada por um carácter
const stringStudents = students.join(', ')
const stringStudents2 = students.join(' ')
log(stringStudents)
log(stringStudents2)
log(typeof stringStudents)

//pop - remove o ultimo elemento do array
const lastStudent = students.pop()
log(students)

//shift - remove o primeiro elemento do array
const firstStudent = students.shift()
log(students)