/*
Operadores de comparação

== -> Igual, ele compara o valor, mas não compara o tipo do valor
=== -> Totalmente igual, ele verifica o valor e o tipo de dado

!= Diferente, ele compara se o valor é diferente de tipo
!== Totalmente diferente, ele compara se o valor e o tipo são diferentes
> -> Maior que
< -> Menor que
>= -> Maior ou igual
<= -> Menor ou igual 
*/

const firstPerson = 'João'
const secondPerson = 'Maria'

console.log(firstPerson == secondPerson)
console.log(firstPerson === secondPerson)  // aqui compara tipo e valor

const firstNumber = '23'
const secondNumber = 23

console.log(firstNumber == secondNumber)
console.log(firstNumber === secondNumber)  // aqui compara tipo e valor

const firstNumber2 = 23
const firstNumber3 = 20

console.log(firstNumber2 > firstNumber3)
console.log(firstNumber2 < firstNumber3)

const firstNumber4 = 12
const firstNumber5 = 10

console.log(firstNumber4 >= firstNumber5)
console.log(firstNumber4 <= firstNumber5)