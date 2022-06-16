import { useState } from 'react'

import * as S from './styles'

import Peoples from './src/assets/peoples.svg'
import Arrow from './src/assets/arrow.svg'
import Trash from './src/assets/trash.svg'

function App() {
  // REACT HOOKS => FERRAMENTAS AUXILIARIES PARA O REACT
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  async function addNewUser() {
    setUsers()
  }

  function changeInputName(event) {
    setName(event.target.value)
  }

  function changeInputEmail(event) {
    setEmail(event.target.value)
  }

  return (
    <S.Container>
      <S.Image src={Peoples} alt="logo imagem" />
      <S.ContainerItems>
        <S.H1>Olá!</S.H1>

        <S.InputLabel>Nome:</S.InputLabel>
        <S.Input onChange={changeInputName} placeholder="Nome" />

        <S.InputLabel>E-mail:</S.InputLabel>
        <S.Input onChange={changeInputEmail} placeholder="E-mail" />

        <S.Button onClick={addNewUser}>
          Cadastrar
          <img src={Arrow} alt="imagem de seta" />
        </S.Button>

        <ul>
          {users.map(user => (
            <li>
              {user.name}
              {user.email}
            </li>
          ))}
        </ul>
      </S.ContainerItems>
    </S.Container>
  )
}

export default App
