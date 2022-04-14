const person = require('./person')
const { personMale, personFemale } = require('./personsMaleAndFemale')
const sum = require('./sum')
const multi = require('./multi')

console.log(
  `O nome do cliente é ${person.name} e sua idade é ${person.age} anos`
)

console.log(
  `O masculino é ${personMale.name} e tem ${personMale.age} anos
O feminino é ${personFemale.name} e tem ${personFemale.age} anos`
)

console.log(sum(56, 48))

console.log(multi(4, 6))
