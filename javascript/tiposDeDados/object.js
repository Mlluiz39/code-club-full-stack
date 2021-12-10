/* 
OBJECT

propriedades: valor
marca: "Ford"
cor: "preto"

nome: "Fusca"
ano: "1962"
*/

const car = {
    brand: "Ford",
    color: "preto",
    year: "1962", 
}

const person = {
    name: "João dos Santos",
    age: "30",
    sex: 'Male',
    height: 1.8,
    address: {
      street:'Vinte e dois de maio',
      number: 6,
      city: 'São Paulo',
      country: 'Brasil'
    }
}

console.log(`Nome da pessoa: ${person.name}`)
console.log(`nome da cidade onde mora: ${person.address.city}`)

