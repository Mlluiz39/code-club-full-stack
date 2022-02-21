const element = document.querySelector('h1')
const button = document.querySelector('button')
const buttonClick = document.querySelector('.btn-click')
const input = document.querySelector('input')

const myFunction = () => {
  alert('Hello World')
}

buttonClick.onclick = () => {
  alert('Fui clicado')
}

input.onkeyup = () => {
  console.log('pressionei uma tecla')
}

console.log(element)

