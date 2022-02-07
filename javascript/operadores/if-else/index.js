/*
Controle de fluxo - condicionais - IF / ELSE
if = se
else = se não
else if = se não, mas se
 */

const age = 11

if (age >= 18) {
  console.log('maior de idade')
} else {
  console.log('menor de idade')
}

const temperature = 40

if (temperature >= 36 && temperature <= 38) {
  console.log('A pessoa está com a temperatura normal')
} else if (temperature <= 35) {
  console.log('A pessoa está com a temperatura baixa')
} else {
  console.log('A pessoa está com a temperatura alta')
}
