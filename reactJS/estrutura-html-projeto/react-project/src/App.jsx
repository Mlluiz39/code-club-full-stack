import * as S from './styles'

import Peoples from './assets/peoples.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

export default function App() {
  const users = [
    {
      id: Math.round(),
      name: 'Marcelo Luiz',
      email: 'mlluiz@gmail.com',
    },
    {
      id: Math.round(),
      name: 'Julia Souza',
      email: 'juuh@gmail.com',
    },
  ]
  return (
    <S.Container>
      <S.Image src={Peoples} alt="logo imagem" />
      <S.ContainerItems>
        <S.H1>Olá!</S.H1>

        <S.InputLabel>Nome</S.InputLabel>
        <S.Input placeholder="Nome" />

        <S.InputLabel>E-mail</S.InputLabel>
        <S.Input placeholder="e-mail" />

        <S.Button>
          Cadastrar
          <img src={Arrow} alt="imagem de seta" />
        </S.Button>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <S.User>
                <S.UserName>{user.name} </S.UserName>
                <S.UserEmail>{user.email}</S.UserEmail>
                <button>
                  <img src={Trash} alt="image trash" />
                </button>
              </S.User>
            </li>
          ))}
        </ul>
      </S.ContainerItems>
    </S.Container>
  )
}
