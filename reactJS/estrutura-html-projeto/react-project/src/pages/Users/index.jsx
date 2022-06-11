import { useState, useEffect } from 'react'
import axios from 'axios'

import * as S from './styles'

import UserProfile from '../../assets/User-Profile.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const { data: showUsers } = await axios.get('http://localhost:3001/users')

      setUsers(showUsers)
    }

    loadUsers()
  }, [])

  const deleteUser = async userId => {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    setUsers(users.filter(user => user.id !== userId))
  }

  return (
    <S.Container>
      <S.Image src={UserProfile} alt="logo imagem" />
      <S.ContainerItems>
        <S.H1>Usuários</S.H1>

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

        <S.Button>
          <img src={Arrow} alt="imagem de seta" />
          Voltar
        </S.Button>
      </S.ContainerItems>
    </S.Container>
  )
}

export default Users
