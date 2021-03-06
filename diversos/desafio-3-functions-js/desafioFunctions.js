/* 
[ ] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou

[ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata! 

[ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos! 

[ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!


[ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 

- Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investido
- A função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo

[ ] Escreva um programa onde, você cria uma função geradora de desconto. 

- A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

- Os descontos funcionam da seguinte forma: 

    - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto 

    - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto     

    - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20% 

    - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
    
    - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

    - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

    - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto     

   - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

   - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
   
   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto 

   - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO
- A função deve imprimir na tela: 

    - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.       

    - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
    */

const log = msg => console.log(msg)

log('------------------------ números de 1 ao selecionado --------------------')

function numbersFromASelected(numberToSelected) {
  for (let i = 1; i <= numberToSelected; i++) {
    log(`Contando... ${i}`)
  }
}

numbersFromASelected(5)

log('----------------------------- Tabuada -----------------------------------')

const multiplicationTable = number => {
  if (number > 10 || number < 1) {
    log('Aceitamos somente números entre 1 e 10')
    return
  }

  for (let index = 1; index <= 10; index++) {
    log(`${number} x ${index} = ${number * index}`)
  }
}

multiplicationTable(2)

log('----------------------------- Hora Exata --------------------------------')

function exactTime() {
  const date = new Date()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  log(`${hour}:${minutes}:${seconds}`)
}

exactTime()

log('----------------------------- Ano Exato ---------------------------------')

function exactYear() {
  const date = new Date()
  const year = date.getFullYear()

  log(`${year}`)
}

exactYear()

log('----------------------------- Maior Número ------------------------------')

function greaterNumber(num1, num2) {
  num1 > num2
    ? log(`${num1} é maior que ${num2}`)
    : log(`${num2} é maior que ${num1}`)
}

greaterNumber(34, 6)

log('-------------- media de salario e filhos da população--------------------')

const population = [
  { name: 'Marilene', salary: 2200, children: 4 },
  { name: 'Luiz', salary: 4300, children: 5 },
  { name: 'Marcelo', salary: 2000, children: 1 },
  { name: 'Elaine', salary: 2300, children: 2 },
  { name: 'Alex', salary: 1500, children: 3 },
]

const averageSalaryAndChildren = population => {
  let totalSalary = 0
  let totalChildren = 0

  for (let i = 0; i < population.length; i++) {
    totalSalary += population[i].salary
    totalChildren += population[i].children
  }

  log(`Média de salário: ${totalSalary / population.length}`)
  log(`Média de filhos: ${totalChildren / population.length}`)
}

averageSalaryAndChildren(population)

log('----------------------------- Taxa mensal de juros ----------------------')

const interests = (currentValue, initialCurrent, time) => {
  const taxa = ((currentValue - initialCurrent) / initialCurrent) * time
  log(`Taxa de juros: ${taxa.toFixed(1)}%`)
}

interests(2030, 1300, 6)

log('----------------------------- Gerador de descontos ----------------------')

/*
Como rodar o programa 
digite seu nome:
digite o valor da compra:
digite se é a primeira compra do cliente: com S para SIM ou N para NÃO:
digite se o cliente vai pagar a vista ou parcelado: com S para SIM ou N para NÃO:
*/

const discount = (name, value, firstPurchase, payCash) => {
  let first = firstPurchase
  let pay = payCash
  if (first === 'S' || first === 's') first = true
  else first = false

  if (pay === 'S' || pay === 's') pay = true
  else pay = false

  if (value >= 1000 && first && pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 30%`)
  } else if (value <= 1000 && value >= 500 && first && pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 25%`)
  } else if (value <= 500 && first && pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 20%`)
  } else if (value >= 1000 && first && !pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 20%`)
  } else if (value <= 1000 && value >= 500 && first && !pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 15%`)
  } else if (value <= 500 && first && !pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 10%`)
  } else if (value >= 1000 && !first && pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 20%`)
  } else if (value <= 1000 && value >= 500 && !first && pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 15%`)
  } else if (value <= 500 && !first && pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 10%`)
  } else if (value >= 1000 && !first && !pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 10%`)
  } else if (value <= 1000 && value >= 500 && !first && !pay) {
    log(`${name}, obrigado pela compra! Você ganhou um desconto de 5%`)
  } else if (value <= 500 && !first && !pay) {
    log(`${name} Você não teve desconto, mas obrigado pela compra`)
  }
  return first, pay
}

discount('Marcelo', 1100, 'S', 's')
