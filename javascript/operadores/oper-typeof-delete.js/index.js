/*
Operadores TYPEOF e DELETE
*/

const log = (...value) => console.log(...value);

const myNumber = 10
const myString = 'Hello'

const myObject = {
  name: 'Marcelo',
  age: 42,
  height: 1.86
}

log(typeof myObject)

log(myObject)
delete myObject.age
delete myObject.height
log(myObject)
