/*
Usar Filter para filtrar o array list com apenas o números pares 
e divisíveis por 5.

const list = [20, 3, 234, 12, 17 ,541, 6, 275, 1000]
*/

const log = args => console.log(args)

const list = [20, 3, 234, 12, 17, 541, 6, 275, 1000]

const evenAndDivisibleBy5 = list.filter(
  number => number % 2 === 0 && number % 5 === 0
)

log(evenAndDivisibleBy5)

/*
Usar Filter para filtrar o array companies com apenas as empresas que 
foram fundadas a partir de 1975 e que possuem mais de 2 milhões de dólares de 
valor de mercado.

const companies = [
  { name: "Samsung", marketValue: 50, CEO: 'Kim Hyun Suk', founded: 1938 },
  { name: "Microsoft", marketValue: 645, CEO: 'Bill Gates', founded: 1975 },
  { name: "Intel", marketValue: 545, CEO: 'Brian Krzanich', founded: 1968 },
  { name: "Facebook", marketValue: 383, CEO: 'Mark Zuckerberg', founded: 2004 },
  { name: "Google", marketValue: 785, CEO: 'Larry Page', founded: 1998 },
  { name: "Apple", marketValue: 845, CEO: 'Steve Jobs', founded: 1976 },
]
*/

const companies = [
  { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', founded: 1938 },
  { name: 'Microsoft', marketValue: 645, CEO: 'Bill Gates', founded: 1975 },
  { name: 'Intel', marketValue: 545, CEO: 'Brian Krzanich', founded: 1968 },
  { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', founded: 2004 },
  { name: 'Google', marketValue: 785, CEO: 'Larry Page', founded: 1998 },
  { name: 'Apple', marketValue: 845, CEO: 'Steve Jobs', founded: 1976 },
]

const foundedAbove1975AndMoreThan2Million = companies.filter(company => {
  return company.founded >= 1975 && company.marketValue >= 200
})

log(foundedAbove1975AndMoreThan2Million)
