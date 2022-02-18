/*
Desafio REDUCE
[] Fazer um programa que some os valores de mercado de cada empresa 
com método reduce

EX:
const companies = [
  { name: "Samsung", marketValue: 50, CEO: 'Kim Hyun Suk', founded: 1938 },
  { name: "Microsoft", marketValue: 645, CEO: 'Bill Gates', founded: 1975 },
  { name: "Intel", marketValue: 545, CEO: 'Brian Krzanich', founded: 1968 },
  { name: "Facebook", marketValue: 383, CEO: 'Mark Zuckerberg', founded: 2004 },
  { name: "Google", marketValue: 785, CEO: 'Larry Page', founded: 1998 },
  { name: "Apple", marketValue: 845, CEO: 'Steve Jobs', founded: 1976 },
]
*/
const log = args => console.log(args)

const companies = [
  { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', founded: 1938 },
  { name: 'Microsoft', marketValue: 645, CEO: 'Bill Gates', founded: 1975 },
  { name: 'Intel', marketValue: 545, CEO: 'Brian Krzanich', founded: 1968 },
  { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', founded: 2004 },
  { name: 'Google', marketValue: 785, CEO: 'Larry Page', founded: 1998 },
  { name: 'Apple', marketValue: 845, CEO: 'Steve Jobs', founded: 1976 },
]

const valueMarket = (acc, company) => acc + company.marketValue
const marketValueOfCompanies = companies.reduce(valueMarket, 0)

log(marketValueOfCompanies)

/////////////////////// Exemplos de reduce ////////////////////////////////////

const marketValueOfCompanies1 = companies.reduce((acc, company) => acc + company.marketValue, 0)

log(marketValueOfCompanies1)
/*
Da forma acima não é preciso envolver toda a expressão entre parenteses para 
usar o acumulador 0 como valor inicial
*/

const marketValueOfCompanies2 = companies.reduce(
  (acc, company) => acc + company.marketValue,
  0
)

log(marketValueOfCompanies2)

/*
No exemplo acima para que não ultrapasse a quantidade de 80 caracteres, o que 
dificultaria a leitura do código, foi feita a quebra da expressão em duas linhas
 e uma vez não foi necessário envolver toda a expressão entre parenteses.
*/
