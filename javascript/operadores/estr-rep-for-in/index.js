/*
Estrutura de repetição for in
*/

const log = (...values) => console.log(...values)

const student = {
  name: 'Marcelo Luiz',
  age: 42,
  course: 'Full Stack',
  institution: 'Code Club'
}

log(student.name)  // Marcelo Luiz é a mesma coisa que log(student['name'])
log(student['age']) // 42 e a mesma coisa que log(student.age)

log('-------------------------------------')

for (const property in student) {
    log(`${property}: ${student[property]}`) // { name: 'Marcelo Luiz', age: 42, course: 'Full Stack', institution: 'Code Club' }
  }