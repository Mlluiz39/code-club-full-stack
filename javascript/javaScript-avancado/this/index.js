const { persons } = require('./this')

const value = `${persons.name} diz ${persons.talk('Ola Mundo!')}`

console.log(value)
console.log(persons.talk('Ola'))
