import { useState } from 'react'

import * as S from './styles'

import Peoples from './assets/peoples.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

export default function App() {
  // REACT HOOKS => FERRAMENTAS AUXILIARIES PARA O REACT
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const addNewUser = () => {
    setUsers([...users, { id: Math.random(), name, email }])
  }

  const changeInputUser = event => {
    setName(event.target.value)
  }
  const changeInputEmail = event => {
    setEmail(event.target.value)
  }
  return (
    <S.Container>
      <S.Image src={Peoples} alt="logo imagem" />
      <S.ContainerItems>
        <S.H1>Olá!</S.H1>

        <S.InputLabel>Nome:</S.InputLabel>
        <S.Input onChange={changeInputUser} placeholder="Nome" />

        <S.InputLabel>E-mail:</S.InputLabel>
        <S.Input onChange={changeInputEmail} placeholder="E-mail" />

        <S.Button onClick={addNewUser}>
          Cadastrar
          <img src={Arrow} alt="imagem de seta" />
        </S.Button>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <S.User>
                <p>{user.name} </p>
                <p>{user.email}</p>
                <button>
                  <img src={Trash} alt="image de lixeira" />
                </button>
              </S.User>
            </li>
          ))}
        </ul>
      </S.ContainerItems>
    </S.Container>
  )
}
