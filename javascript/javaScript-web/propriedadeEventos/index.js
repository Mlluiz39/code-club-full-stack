const element = document.querySelector('input')
const div = document.querySelector('#div-value')
const button = document.querySelector('button')

button.onclick = () => {
  alert('Você digitou o texto: ' + element.value)
  element.value = ''
}

element.onkeydown = event => {
  if (event.keyCode) {
    div.textContent = `Você digitou o texto: ${element.value}`
    if (event.key === 'Enter' || event.button) {
      alert(`Você digitou o texto: ${element.value}`)
      element.value = ''
    }
  }
}

element.onkeyup = event => {
  console.log(event.target.value)
}
