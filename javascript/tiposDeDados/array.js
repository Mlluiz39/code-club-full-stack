/*
ARRAY
*/

const numbers = [10, 5, 234, 400, 6]

const peoples = [
  {
    name: 'João dos Santos',
    age: '30',
    sex: 'Male',
    height: 1.8,
    address: {
      street: 'Vinte e dois de maio',
      number: 6,
      city: 'São Paulo',
      country: 'Brasil',
    },
  },
  {
    name: 'Maria Jose',
    age: '60',
    sex: 'female',
    height: 1.5,
    address: {
      street: 'Tres de Outubro',
      number: 22,
      city: 'São Paulo',
      country: 'Brasil',
    },
  },
  {
    name: 'Andre Farias',
    age: '42',
    sex: 'Male',
    height: 1.7,
    address: {
      street: 'Do lado',
      number: 400,
      city: 'São Paulo',
      country: 'Brasil',
    },
  },
]

console.log(numbers)
console.log(numbers[0])
console.log(peoples)
console.log(peoples[1])
console.log(peoples[2].name)  // aqui estamos acessando o nome da pessoa 3
