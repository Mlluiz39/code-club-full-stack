import { useEffect, useState } from 'react'

import axios from 'axios'

import * as S from './styles'

import Trash from '@/assets/trash.svg'
import Arrow from '@/assets/arrow.svg'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const { data: newUser } = await axios.get('http://localhost:3001/users')
      setUsers(newUser)
    }
    loadUsers()
  }, [])
  return (
    <S.Container>
      <S.H1>Lista de usuários</S.H1>
      <S.Table>
        <S.TableHeader>
          <S.TRHeader>
            <S.THHeader>ID</S.THHeader>
            <S.THHeader>Nome</S.THHeader>
            <S.THHeader>Email</S.THHeader>
          </S.TRHeader>
        </S.TableHeader>
        {users.map(user => (
          <S.TableBody key={user.id}>
            <S.TRow>
              <S.TData>{user.id}</S.TData>
              <S.TData>{user.name}</S.TData>
              <S.TData>
                {user.email}
                <S.Image alt="seta" src={Trash} />
              </S.TData>
            </S.TRow>
          </S.TableBody>
        ))}
      </S.Table>
      <S.Button to="/">
        <img alt="seta" src={Arrow} /> voltar
      </S.Button>
    </S.Container>
  )
}
