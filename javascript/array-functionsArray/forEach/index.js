/*
For each faz somente a interação com o usuário, ou seja não tem nenhuma 
lógica de negócio; não altera o estado do programa ou variável.
*/

const log = args => console.log(args)
const table = args => console.table(args)

const peoples = [
  { name: 'Marcelo', age: 42, sex: 'Masculino' },
  { name: 'Julia', age: 18, sex: 'Feminino' },
  { name: 'Caique', age: 20, sex: 'Masculino' },
  { name: 'Rafaela', age: 36, sex: 'Feminino' },
  { name: 'Luiz', age: 48, sex: 'Masculino' },
  { name: 'Elaine', age: 38, sex: 'Feminino' },
  { name: 'Marilene', age: 74, sex: 'Feminino' },
]

peoples.forEach((people, index, array) => {
  log(
    `${index + 1}°pessoa = ${people.name} tem ${people.age} anos e é do sexo ${
      people.sex
    }`
  )
})

log('-------------------------------------------------------------------------')

let allPeoplesAge = 0

peoples.forEach(peoples => {
  allPeoplesAge += peoples.age
})

const averageAge = allPeoplesAge / peoples.length

log(`A idade media das pessoas é de ${averageAge.toFixed(0)}`)
