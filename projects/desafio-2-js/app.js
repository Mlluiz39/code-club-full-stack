/* 
//////////// Desafio 02 javaScript ////////////

[ ] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"

[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.


[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.


[ ] Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

[ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.


[ ] Faça um programa onde leia um numero e diga se ele é par ou impar.


[ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.


[ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.
*/

const log = msg => console.log(msg)

const myNumber = 10
let valueClient = 5
if (valueClient > myNumber) {
  log('O número é maior')
} else if (valueClient < myNumber) {
  log('O número é menor')
} else {
  log('O número é igual')
}

const client = {
  name: 'José',
  age: '20',
  nationality: 'brasileiro',
}

log(client.nationality === 'brasileiro')
log(client['nationality'] === 'argentino')

const myLuckyNumber = 5
const numberRandom = Math.floor(Math.random() * 10 + 1)
numberRandom == myLuckyNumber
  ? log('esse número é o número ganhador parabéns!')
  : log('esse não é o numero sorteado tente novamente!')

const myNumber1 = 17
const myNumber2 = 26
const myNumber3 = 19
if (myNumber1 > myNumber2 && myNumber1 > myNumber3) {
  log('O número 1 é o maior')
} else if (myNumber2 > myNumber1 && myNumber2 > myNumber3) {
  log('O número 2 é o maior')
} else {
  log('O número 3 é o maior')
}

const customer = [
  (customerOne = {
    name: 'Marcelo',
    age: '42',
    sex: 'masculino',
    profession: 'programador',
    nationality: 'brasileira',
  }),
  (customerTwo = {
    name: 'Julia',
    age: '17',
    sex: 'feminino',
    profession: 'estudante',
    nationality: 'brasileira',
  }),
  (customerThree = {
    name: 'Kaique',
    age: '20',
    sex: 'masculino',
    profession: 'mecânico de motos',
    nationality: 'brasileira',
  }),
  (customerFour = {
    name: 'Elaine',
    age: '38',
    sex: 'Feminino',
    profession: 'Técnico segurança trabalho',
    nationality: 'brasileira',
  }),
  (customerFive = {
    name: 'Matheus',
    age: '15',
    sex: 'masculino',
    profession: 'estudante',
    nationality: 'brasileira',
  }),
]
if (customer[4].age >= 18 && customer[4].nationality === 'brasileira') {
  log('pessoa aprovada no processo!')
} else {
  log('pessoa não aprovada no processo!')
}

const note = 5
switch (note) {
  case 1:
    log('nota muito baixa')
    break
  case 2:
    log('nota baixa')
    break
  case 3:
    log('nota media')
    break
  case 4:
    log('nota boa')
    break
  case 5:
    log('nota muito boa')
    break
  case 6:
    log('nota excelente')
    break
  case 7:
    log('nota mais que excelente')
    break
  case 8:
    log('nota ótima')
    break
  case 9:
    log('nota mais que ótima')
    break
  case 10:
    log('nota excepcional parabéns!')
    break
  default:
    log('nota inválida')
    break
}

const evenOrOddNumber = 4
evenOrOddNumber % 2 === 0
  ? log('esse número é par')
  : log('esse número é impar')

const primeAndImparNumber = 7
if (primeAndImparNumber % 2 === 0) {
  log('esse número é par')
} else if (primeAndImparNumber % 5 === 0) {
  log('esse número é divisível por 5')
} else if (primeAndImparNumber % 3 === 0) {
  log('esse número é impar')
} else if (primeAndImparNumber % 7 === 0) {
  log('esse número é primo')
}

const oddAndEvenNumbers = [2, 47, 6, 29]
for (let i = 0; i < oddAndEvenNumbers.length; i++) {
  const number = oddAndEvenNumbers[i]
  if (number % 2 === 0) {
    log('o numero ' + [number] + ' é par')
  } else {
    log('o número ' + [number] + ' é impar')
  }
}
