/**
 * This
 * this no ingles significa => este, isto, esta...
 * No javaScript, o this faz referencia:
 * Node => module.exports
 * Web => window
 *
 * Escopo:
 * => Global -> Quando começamos a escrever nossa aplicação.
 * No contexto global, o this faz referencia ao objeto global,
 * que é o objeto window no navegador de internet ou ao objeto global no node.js.
 *
 * => Local -> Poe exemplo, dentro de uma função ou dentro de chaves como if ou for
 */

// console.log(global)
// global.console.log('Ola')
// console.log(this === module.exports)

const person = {
  name: 'Marcelo Luiz',
  age: 42,
  talk(data) {
    console.log(`${this.name} tem ${this.age} anos`)
    return data
  },
}

this.persons = person

function myFunction() {
  this.console.log('Agora sou global')
}

myFunction()
