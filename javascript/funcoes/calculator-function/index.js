const calculate = (num1, num2, operator) => {
  let result

  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
    default:
      result = 'Operação inválida'
  }
  return result
}

const sum = calculate(10, 5, '+')
const subtraction = calculate(10, 5, '-')
const multiplication = calculate(10, 5, '*')
const division = calculate(10, 5, '/')

console.table({ sum, subtraction, multiplication, division })