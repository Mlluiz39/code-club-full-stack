/*
Filter
-Cria um filtro para um array a partir de um array percorrido(array original
  -Cria um novo array com os elementos que passaram no filtro
  -Retorna o novo array
  Aceita três parâmetros:
  -O item a ser testado
  -O index do item
  -O array completo
*/

const log = message => console.log(message)

const list = [
  { name: 'Marcelo', vip: true },
  { name: 'João', vip: false },
  { name: 'Paulo', vip: true },
  { name: 'Pedro', vip: true },
  { name: 'Carlos', vip: false },
  { name: 'Rafael', vip: true },
  { name: 'Márcio', vip: false },
]

const justVips = list.filter(client => {
  return client.vip
})
log(justVips)

const students = [
  { name: 'Rodolfo', testGrade: 7 },
  { name: 'Maria', testGrade: 5 },
  { name: 'João', testGrade: 8 },
  { name: 'Bruno', testGrade: 9 },
  { name: 'Carla', testGrade: 3 },
  { name: 'Ana', testGrade: 2 },
  { name: 'Julia', testGrade: 10 },
]

const newStudentList = students.filter(student => {
  return student.testGrade >= 7
})
log(newStudentList)

const newStudentList1 = students.filter(student => student.testGrade < 7)
log(newStudentList1)

const functionForTestingScores = student => student.testGrade >= 7
const newStudentList2 = students.filter(functionForTestingScores)
log(newStudentList2)
