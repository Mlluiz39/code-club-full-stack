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

const element = document.getElementByTagName('body')

log(element)