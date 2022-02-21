const input = document.querySelector('input')
const button = document.querySelector('button')
const select = document.querySelector('select')

const clickButton = () => {
  input.value === ''
    ? alert('Selecione os valores de select e input')
    : alert(`${input.value} selecionou a opção ${select.value}`)
    input.value = ''
    select.value = select.options[1].value  // caso queira deixar um valor default
}

input.addEventListener('focus', () => {
  console.log('dei um foco no input')
})

select.addEventListener('change', () => {
  console.log(select.value)
})

// button.addEventListener('click', () => {
//   alert('clicou no button')
// })

button.addEventListener('click', clickButton)
