/*
Desafio reduce 2
Faça um programa que adiciona 10% na receita de cada empresa e depois filtrar 
apenas as empresa fundadas antes do ano 2000 e por ultimo soma as receitas das 
empresas filtradas.
*/

const log = args => console.log(args)

const companies = [
  { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
  { name: 'Microsoft', marketValue: 415, CEO: 'Bill Gates', foundedOn: 1975 },
  { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
  { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerb', foundedOn: 2004,},
  { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
  { name: 'Apple', marketValue: 845, CEO: 'Steve Jobs', foundedOn: 1976 },
]

const add10PercentToMarketValue = company => {
  company.marketValue += company.marketValue * 0.1
  return company
}

const filterCompaniesBefore2000 = company => company.foundedOn < 2000

const sumMarketValue = (total, company) => total + company.marketValue

const myBestCompanies = companies
  .map(add10PercentToMarketValue)
  .filter(filterCompaniesBefore2000)
  .reduce(sumMarketValue, 0)

log(myBestCompanies)
