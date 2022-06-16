import { useState, useRef } from 'react'

import axios from 'axios'

import * as S from './styles'

import Peoples from './assets/peoples.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

function App() {
  // REACT HOOKS => FERRAMENTAS AUXILIARIES PARA O REACT
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputEmail = useRef()

  async function addNewUser() {
    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value,
      email: inputEmail.current.value,
    })

    setUsers([...users, newUser])

    console.log(newUser)
  }

  function deleteUser(userId) {
    setUsers(users.filter(user => user.id !== userId))
  }

  return (
    <S.Container>
      <S.Image src={Peoples} alt="logo imagem" />
      <S.ContainerItems>
        <S.H1>Olá!</S.H1>

        <S.InputLabel>Nome:</S.InputLabel>
        <S.Input ref={inputName} placeholder="Nome" />

        <S.InputLabel>E-mail:</S.InputLabel>
        <S.Input ref={inputEmail} placeholder="E-mail" />

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

              <button onClick={() => deleteUser(user.id)}>
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
