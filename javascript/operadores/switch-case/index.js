/*
Controle de fluxo - condicionais - SWITCH
*/

const temperature = 36

switch (temperature) {
  case 30:
    console.log('A pessoa está com a temperatura MUITO baixa')
    break
  case 33:
    console.log('A pessoa está com a temperatura abaixo do normal')
    break
  case 36:
    console.log('A pessoa está com a temperatura normal')
    break
  case 39:
    console.log('A pessoa está com a temperatura acima do normal')
    break
  case 42:
    console.log('A pessoa está com a temperatura MUITO acima do normal')
    break
  default:
    console.log('temperatura invalida')
    break
}
