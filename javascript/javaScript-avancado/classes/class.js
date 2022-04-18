/**
 * Classes
 */

/*

Modelo com objects

const person = {
  name: 'Marcelo Luiz',
  age: 42,
  talk: function () {
    console.log(`Hello, my name is ${this.name}`)
  },
}

*/

class Person {
  name
  age
  talk() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
  }
}

class Person1 {
  constructor(name, age) {
    console.log(`Hello, I'm ${name}`)

    this.name = name  
    this.age = age
    /* this é utilizado para expor a variável para o escopo global da 
       função construtora
    */
  }
  talk() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
  }
}

const newPersonMarcelo = new Person()
newPersonMarcelo.name = 'Marcelo'
newPersonMarcelo.age = 42
newPersonMarcelo.talk()

const newPersonJuuh = new Person1('Julia', 18)
newPersonJuuh.talk()

const newPersonLuiz = new Person1('Marcelo Luiz', 42)
newPersonLuiz.talk()
