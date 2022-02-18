/*
REDUCE 
- Retorna um valor a partir de uma função de acumulação e um valor inicial.
- Pode retornar um array, objeto, string, number, boolean, etc.
- A função de acumulação deve ter dois parâmetros: o valor acumulado e o valor atual.
- O valor inicial é opcional.
- O valor inicial deve ser passado como primeiro parâmetro da função de acumulação.
- Acumulador é o valor acumulado até o momento.
- Valor atual é o valor atual do array ou objeto.
- index é o índice do valor atual.
- Array é o array que será reduzido.
*/

const log = args => console.log(args)

const list = [1, 2, 3, 4]

const sum = list.reduce((acc, current, index) => {
  log(`Na ${index + 1} iteração acc recebeu ${acc} + ${current} do valor atual = ${acc + current}`)
  return acc + current
}, 0)

log(`Total: ${sum}`)
