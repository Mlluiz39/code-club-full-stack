import { useState } from 'react'

import * as S from './styles'

import Peoples from './src/assets/peoples.svg'
import Arrow from './src/assets/arrow.svg'
import Trash from './src/assets/trash.svg'

function App() {
  // REACT HOOKS => FERRAMENTAS AUXILIARIES PARA O REACT
  const [users, setUsers] = useState([])

  console.log(users)

  async function addNewUser() {
    setUsers([
      { id: Math.random(), name: 'Marcelo Luiz', email: 'mlluiz@gmail.com' },
    ])
  }

  return (
    <S.Container>
      <S.Image src={Peoples} alt="logo imagem" />
      <S.ContainerItems>
        <S.H1>Olá!</S.H1>

        <S.InputLabel>Nome:</S.InputLabel>
        <S.Input placeholder="Nome" />

        <S.InputLabel>E-mail:</S.InputLabel>
        <S.Input placeholder="E-mail" />

        <S.Button onClick={addNewUser}>
          Cadastrar
          <img src={Arrow} alt="imagem de seta" />
        </S.Button>

        <ul>
          {users.map(user => (
            <S.User key={user.id}>
              <div>
                <section>
                  <span>Nome:</span>
                  <p>{user.name}</p>
                </section>
                <section>
                  <span>Email:</span>
                  <p>{user.email}</p>
                </section>
              </div>

              <button>
                <img src={Trash} alt="imagem de lixeira" />
              </button>
            </S.User>
          ))}
        </ul>
      </S.ContainerItems>
    </S.Container>
  )
}

export default App
