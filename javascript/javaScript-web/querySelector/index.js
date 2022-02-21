/*
Selecionando Elementos:

- getElementById() - retorna apenas um elemento pelo id
- getElementsByTagName() - retorna todos os elementos que possuem o mesmo nome 
  na tag
- getElementsByClassName() - retorna todos os elementos que possuem a 
  mesma classe(HTML collection)
- getElementsByName() - retorna todos os elementos que possuem o mesmo nome

- querySelector() - retorna apenas um elemento pelo id (element) (.class, #id)
- querySelectorAll() - retorna todos os elementos que possuem o mesmo nome (node list)

node list x HTML collection
*/

const log = (msg) => console.log(msg)

const element = document.querySelector('p')  // aqui retorna o 1° se tiver mais de um elemento

const element1 = document.querySelector('.paragraph') // aqui retorna a classe também só retorna o 1°

const element2 = document.querySelector('#main-text') // aqui retorna o id também só retorna o 1

log(element)
log(element1)
log(element2)