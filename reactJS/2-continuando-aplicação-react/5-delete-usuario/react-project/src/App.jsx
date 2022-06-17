import { useState, useRef, useEffect } from 'react'
import swal from 'sweetalert'

import axios from 'axios'

import * as S from './styles'

import Peoples from './assets/peoples.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

function App() {
  const [users, setUsers] = useState([])
  const [setStatus] = useState(false)
  const inputName = useRef()
  const inputEmail = useRef()

  async function addNewUser() {
    if (!validate()) return

    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value,
      email: inputEmail.current.value,
    })

    if (newUser) {
      setUsers([...users, newUser])
      inputName.current.value = ''
      inputEmail.current.value = ''
      setStatus(
        swal({
          title: 'Usuário cadastrado com sucesso!',
          icon: 'success',
          timer: 2000,
        })
      )
    } else {
      setStatus(swal({ title: 'Erro ao cadastrar usuário!', icon: 'error' }))
    }
  }

  useEffect(() => {
    async function fetchUsers() {
      const { data: searchUsers } = await axios.get(
        'http://localhost:3001/users'
      )

      setUsers(searchUsers)
    }
    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    setUsers(users.filter(user => user.id !== userId))
  }

  function validate() {
    if (!inputName.current.value)
      return setStatus(
        swal({
          title: 'Erro',
          text: 'Nome não informado!',
          icon: 'error',
          button: 'Ok',
          timer: 2000,
        })
      )
    if (!inputEmail.current.value)
      return setStatus(
        swal({
          title: 'Erro',
          text: 'Email não informado!',
          icon: 'error',
          button: 'Ok',
          timer: 2000,
        })
      )
    return true
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
                <label>
                  Nome:
                  <p>{user.name}</p>
                </label>

                <label>
                  Email:
                  <p>{user.email}</p>
                </label>
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
