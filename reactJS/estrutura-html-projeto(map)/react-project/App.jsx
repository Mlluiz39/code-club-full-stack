import * as S from './styles'

import Peoples from './src/assets/peoples.svg'
import Arrow from './src/assets/arrow.svg'

function App() {
  // REACT HOOKS => FERRAMENTAS AUXILIARIES PARA O REACT
  const users = [
    { id: Math.random(), name: 'João', email: 'joao@gmail.com' },
    { id: Math.random(), name: 'Maria', email: 'maria@gmail.com' },
  ]

  return (
    <S.Container>
      <S.Image src={Peoples} alt="logo imagem" />
      <S.ContainerItems>
        <S.H1>Olá!</S.H1>

        <S.InputLabel>Nome:</S.InputLabel>
        <S.Input placeholder="Nome" />

        <S.InputLabel>E-mail:</S.InputLabel>
        <S.Input placeholder="E-mail" />

        <S.Button>
          Cadastrar
          <img src={Arrow} alt="imagem de seta" />
        </S.Button>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} <br />
              {user.email}
            </li>
          ))}
        </ul>
      </S.ContainerItems>
    </S.Container>
  )
}

export default App
