var myVar = 'Hello World!'

let myLet1 = 'Ola Mundo!'

const myConst1 = 'Hei World'

const myObject = { name: 'Marcelo' }

const newObject = {
  ...myObject,
}  // aqui usamos spreed para fazer uma copia do objeto

newObject.name = 'Luiz'  // aqui conseguimos alterar a propriedade => nome da const não

const myArray = [1, 2, 3]

myArray[0] = 5  // aqui conseguimos alterar a propriedade => nome da const não

if (true) {
  var myVar1 = 'estou acessível em qualquer local'
  let myLet = 'Ola Mundo!'
  const myConst = 'ola World!'
  console.log(myConst)
  console.log(myLet)
  console.log(myConst1)
}

// console.log(myLet) aqui da erro pois está em outro escopo
// console.log(myConst) aqui da erro pois está em outro escopo
console.log(myVar1)

console.log({ myObject })
console.log({ newObject })

console.log(myArray)
