import { useState, useRef } from 'react'
import axios from 'axios'

import * as S from './styles'

import Peoples from './assets/peoples.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

function App() {
  // REACT HOOKS => FERRAMENTAS AUXILIARIES PARA O REACT
  const [users, setUsers] = useState([])
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const inputName = useRef()
  const inputEmail = useRef()

  async function addNewUser() {
    // const { data: newUser } = await axios.post('http://localhost:3001/users', {
    //   name: inputName.current.value,
    //   email: inputEmail.current.value,
    // })

    // setUsers([...users, newUser])
    // inputName.current.value = ''
    // inputEmail.current.value = ''

    const { data: showUsers } = await axios.get('http://localhost:3001/users')

    setUsers(showUsers)
  }

  // const changeInputUser = event => {
  //   setName(event.target.value)
  // }

  // const changeInputEmail = event => {
  //   setEmail(event.target.value)
  // }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <S.Container>
      <S.Image src={Peoples} alt="logo imagem" />
      <S.ContainerItems>
        <S.H1>Olá!</S.H1>

        <S.InputLabel>Nome:</S.InputLabel>
        {/* <S.Input onChange={changeInputUser} placeholder="Nome" /> */}
        <S.Input ref={inputName} placeholder="Nome" />

        <S.InputLabel>E-mail:</S.InputLabel>
        {/* <S.Input onChange={changeInputEmail} placeholder="E-mail" /> */}
        <S.Input ref={inputEmail} placeholder="E-mail" />

        <S.Button onClick={addNewUser}>
          Cadastrar
          <img src={Arrow} alt="imagem de seta" />
        </S.Button>
        <ul>
          {users.map(user => (
            <S.User key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="image de lixeira" />
              </button>
            </S.User>
          ))}
        </ul>
      </S.ContainerItems>
    </S.Container>
  )
}

export default App
