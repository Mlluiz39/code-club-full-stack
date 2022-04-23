class User {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.points = 0
  }

  login() {
    console.log(`${this.name} logou na aplicação`)
    return this
  }

  logout() {
    return `${this.name} deslogou da aplicação`
  }

  addPoint() {
    this.points++
    return `${this.name} agora tem, ${this.points > 1 ? 'pontos' : 'ponto'} `
  }
}

const user1 = new User('Marcelo Luiz', 'mlluiz@gmail.com')
const user2 = new User('Julia Souza', 'juuh@gmail.com')

// user1.login()
// user1.addPoint()
/**
 * Ou seja quando for necessário encadear invocações de métodos em classes  precisa ser retornado o this pois o this representa os objetos criados na classe
 */
user1.login().addPoint()

console.log(user1)
console.log(user2)
