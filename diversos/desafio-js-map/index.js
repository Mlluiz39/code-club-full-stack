/*
Desafio de map
[] faça um programa que leia um array de 5 objetos e transforme ela em 
um array de pessoas vips

1° exercício:
Array original:

Ex:
const list = [
  {name: 'Rodolfo', vip: true}, 
  {name: 'Maria', vip: false},
  {name: 'João', vip: true},
  {name: 'Pedro', vip: false},
  {name: 'Ana', vip: true}
]

Array modificado: condição: vip = true
const list = [
  {name: 'Rodolfo', vip: true, sector: 'Black'}, 
  {name: 'Maria', vip: false, sector: 'Green'},
  {name: 'João', vip: true, sector: 'Black'},
  {name: 'Pedro', vip: false, sector: 'Black'},
  {name: 'Ana', vip: true, sector: 'Green'}
]

2° exercício:
Array original:

Ex:
const student = [
  {name: 'Rodolfo', testGrade: 7}, 
  {name: 'Maria', testGrade: 5},
  {name: 'Julia', testGrade: 6},
  {name: 'João', testGrade: 10},
  {name: 'Pedro', testGrade: 8},
  {name: 'Ana', testGrade: 2}
]

Array modificado: condição: testGrade >= 7
const student = [
  {name: 'Rodolfo',finalResult: 'approved'}, 
  {name: 'Maria',finalResult: 'disapproved'},
  {name: 'Julia',finalResult: 'disapproved'},
  {name: 'João',finalResult: 'approved'},
  {name: 'Pedro',finalResult: 'approved'},
  {name: 'Ana',finalResult: 'disapproved'}
]
*/

const log = message => console.log(message)

log('--------------------------- 1° exercício --------------------------------')

const list = [
  { name: 'Rodolfo', vip: true },
  { name: 'Maria', vip: false },
  { name: 'João', vip: true },
  { name: 'Pedro', vip: false },
  { name: 'Ana', vip: true },
]

const vipClientList = list.map(vipList => {
  vipList.vip === true ? (vipList.sector = 'Black') : (vipList.sector = 'Green')
  return vipList
})

log(vipClientList)

log('--------------------- Exemplo do Rodolfo --------------------------------')

const newListVip = list.map(client => {
  const newList = {
    name: client.name,
    vip: client.vip,
    sector: client.vip === true ? 'Black' : 'Green',
  }
  return newList
})

log(newListVip)

log('--------------------------- 2° exercício --------------------------------')

const students = [
  { name: 'Rodolfo', testGrade: 7 },
  { name: 'Maria', testGrade: 5 },
  { name: 'Julia', testGrade: 6 },
  { name: 'João', testGrade: 10 },
  { name: 'Pedro', testGrade: 8 },
  { name: 'Ana', testGrade: 2 },
]

const passOrFail = student => {
  student.testGrade >= 7
    ? (student.finalResult = 'approved')
    : (student.finalResult = 'disapproved')
  return {
    name: student.name,
    finalResult: student.finalResult,
  }
}

const passedOrFailedStudent = students.map(passOrFail)

log(passedOrFailedStudent)

log('--------------------- Exemplo do Rodolfo --------------------------------')

const approvedStudents = students.map(student => {
  let approvedOrNot

  if (student.testGrade >= 7) {
    approvedOrNot = 'approved'
  } else {
    approvedOrNot = 'disapproved'
  }

  const students = {
    name: student.name,
    finalResult: approvedOrNot,
  }
  return students
})

log(approvedStudents)
