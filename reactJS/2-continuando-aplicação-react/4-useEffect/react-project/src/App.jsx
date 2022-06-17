import { useState, useRef, useEffect } from 'react'

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
    inputName.current.value = ''
    inputEmail.current.value = ''

  }

  // REACT HOOKS => FERRAMENTAS AUXILIARIES PARA O REACT useEffect (efeito colateral)
  // 1 caso = A minha aplicação inicia (a pagina é carregada useEffect é chamado)
  // 2 caso = Quando um estado que está no array de dependências é alterado (useEffect é chamado)

  useEffect(() => {
    async function fetchUsers() {
      const { data: searchUsers } = await axios.get(
        'http://localhost:3001/users'
      )

      setUsers(searchUsers)
    }
    fetchUsers()
  }, [])

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
