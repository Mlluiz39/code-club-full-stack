// [ ] Faça um programa que SOME 2 números
const number1 = 37
const number2 = 5
const sumTwoNumbers = number1 + number2

console.log(`O resultado do 1° exercicio é => ${sumTwoNumbers}`)

console.log('========================================================')

// [ ] Faça um programa que multiplique 2 números e o resultado adicione 10
const numberValue1 = 8
const numberValue2 = 6
const numberValue3 = 10
const multiplyTwoNumbersPlusTen = numberValue2 * numberValue3 + numberValue1

console.log(`O resultado do 2° exercicio é => ${multiplyTwoNumbersPlusTen}`)

console.log('========================================================')

// [ ] Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33
const squareRootOfANumber = Math.sqrt(56)
const numberTen = 10
const divideBy33 = 33

const result = (squareRootOfANumber * numberTen) / divideBy33

console.log(`O resultado do 3° exercicio é => ${result.toFixed(2)}`)

console.log('========================================================')

// [ ] Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado: Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2)
const name1 = 'Marcelo Luiz'
const name2 = 'Eu mesmo'
const coursePartner =
  'Ola, meu nome é ' + name1 + ' e meu partner do CodeClub é ' + name2

console.log(coursePartner)

console.log('========================================================')

// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João, imprime true. João e Maria, imprime false.
let sameName1 = 'João'
let sameName2 = 'João'
let sameName3 = 'Maria'

let sameNamesValue1 = sameName1 == sameName2
let sameNamesValue2 = sameName2 == sameName3

console.log(
  `O nome ${sameName1} e o nome ${sameName2} em comparação são  \x1b[32m${sameNamesValue1}\x1b[0m`
)
console.log(
  `O nome ${sameName2} e o nome ${sameName3} em comparação são  \x1b[31m${sameNamesValue2}\x1b[0m`
)

console.log('========================================================')

// [ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João, imprime false. João e Maria, imprime true.
sameNamesValue1 = sameName1 != sameName2
sameNamesValue2 = sameName2 != sameName3

console.log(
  `O nome ${sameName1} e o nome ${sameName2} em diferenciação são \x1b[31m${sameNamesValue1}\x1b[0m`
)
console.log(
  `O nome ${sameName2} e o nome ${sameName3} em diferenciação são \x1b[32m${sameNamesValue2}\x1b[0m`
)

console.log('========================================================')

// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.
const namesArray = ['João', 'Maria']

console.log(
  `O nome na posição "0" é igual ao nome na posição "0" =>  \x1b[32m${
    namesArray[0] == namesArray[0]
  }\x1b[0m`
)
console.log(
  `O nome na posição "0" é igual ao nome na posição "1" =>  \x1b[31m${
    namesArray[0] == namesArray[1]
  }\x1b[0m`
)

console.log('========================================================')

// [ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.
const namesArray1 = ['João', 'Maria']

console.log(
  `O nome na posição "0" é igual ao nome na posição "0" => \x1b[31m${
    namesArray1[0] != namesArray1[0]
  }\x1b[0m`
)
console.log(
  `O nome na posição "0" é igual ao nome na posição "1" => \x1b[32m${
    namesArray1[0] != namesArray1[1]
  }\x1b[0m`
)

console.log('========================================================')

// [ ] Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa.
const persons = [
  {
    firstName: 'Marcelo Luiz',
    lastName: 'Souza',
    age: 42,
    sex: 'male',
    height: 1.86,
  },
  {
    firstName: 'Julia',
    lastName: 'Souza',
    age: 17,
    sex: 'female',
    height: 1.73,
  },
  {
    firstName: 'Cilene',
    lastName: ' F. Souza',
    age: 48,
    sex: 'female',
    height: 1.78,
  },
  {
    firstName: 'Kaique',
    lastName: 'Santos',
    age: 19,
    sex: 'male',
    height: 2.02,
  },
  {
    firstName: 'Luiz Carlos',
    lastName: 'Pereira',
    age: 49,
    sex: 'male',
    height: 1.83,
  },
]

console.log(persons)

console.log('========================================================')

// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.
const object1 = persons[0]
const object2 = persons[3]

console.log({object1, object2})

console.log(`O nome "${object1.firstName}" é igual ao nome "${object1.firstName}" => \x1b[32m${object1.firstName == object1.firstName}\x1b[0m`)
console.log(`O nome "${object1.firstName}" é igual ao nome "${object2.firstName}" => \x1b[31m${object1.firstName == object2.firstName}\x1b[0m`)

console.log('========================================================')

// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", secondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
const objectNames = {firstName:"João", secondName:"Maria"}

console.log(`O primeiro nome ${objectNames.firstName} é igual ao sobrenome ${objectNames.firstName} => \x1b[32m${objectNames.firstName == objectNames.firstName}\x1b[0m`)
console.log(`O primeiro nome ${objectNames.firstName} é igual ao sobrenome ${objectNames.secondName} => \x1b[31m${objectNames.firstName == objectNames.secondName}\x1b[0m`)

console.log('========================================================')

// [ ] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.
const randomNumber = Math.random()

console.log(`Numero aleatório entre 1 e 100 é => ${Math.round(randomNumber * 100)}`)  // versão resumida

const randomNumberComplete = Math.random()
const numberMin = Math.ceil(1)
const numberMax = Math.floor(100)

const resultRandom = Math.floor(randomNumberComplete * numberMax - numberMin) + numberMin  // versão completa

console.log(`O numero aleatório entre 1 e 100 é => ${resultRandom}`)

console.log('========================================================')

// [ ] Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.
const odd1 = 7
const odd2 = 3
const odd3 = 25
const odd4 = 5
const divisionRemainder = odd1 % odd2
const divisionRemainder2 = odd3 % odd4

console.log(`O resto da divisão entre ${odd1} e ${odd2} é = ${divisionRemainder}`)
console.log(`O resto da divisão entre ${odd3} e ${odd4} é = ${divisionRemainder2}`)

console.log('========================================================')

// [ ] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.
let insertANumber1 = 2
let insertANumber2 = 5
let resultInsertNumber = insertANumber1 > insertANumber2
let resultInsertNumber2 = insertANumber1 < insertANumber2

console.log(`O numero ${insertANumber1} é maior que o numero ${insertANumber2} => \x1b[31m${resultInsertNumber}\x1b[0m`)

console.log('========================================================')

// [ ] Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.
console.log(`O numero ${insertANumber1} é menor que o numero ${insertANumber2} => \x1b[32m ${resultInsertNumber2}\x1b[0m`)

console.log('========================================================')

// [ ] Crie um programa que mostra o tamanho do Array. Ex: const array = [0, 1] imprime: 2. const array = ["banana", "Maça", "laranja"] imprime: 3
console.log(`O tamanho do array persons é ${persons.length}`)

