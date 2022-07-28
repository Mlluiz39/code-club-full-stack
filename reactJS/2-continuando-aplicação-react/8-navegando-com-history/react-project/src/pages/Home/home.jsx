import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'

import axios from 'axios'

import * as S from './styles'

import Peoples from '@/assets/peoples.svg'
import Arrow from '@/assets/arrow.svg'
import User from '@/assets/user-check.svg'

export default function Home() {
  const [users, setUsers] = useState([])
  const [status, setStatus] = useState(false)
  const inputName = useRef()
  const inputEmail = useRef()
  const history = useHistory()

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
      setStatus(
        swal({
          title: 'Falha ao cadastrar usuário!',
          icon: 'error',
          timer: 2000,
        })
      )
    }
  }

  function validate() {
    if (!inputName.current.value)
      return setStatus(
        swal({
          title: 'Error',
          text: 'Nome não informado!',
          icon: 'error',
          timer: 2000,
        })
      )
    if (!inputEmail.current.value)
      return setStatus(
        swal({
          title: 'Error',
          text: 'Email não informado!',
          icon: 'error',
          timer: 2000,
        })
      )
    return true
  }

  function goPageUsers() {
    history.push('/usuarios')
  }

  return (
    <S.Container>
      <S.Image src={Peoples} alt="logo images" />
      <S.ContainerItems>
        <S.H1>Olá!</S.H1>

        <S.InputLabel>Nome :</S.InputLabel>
        <S.Input ref={inputName} placeholder="Nome" />

        <S.InputLabel>E-mail :</S.InputLabel>
        <S.Input ref={inputEmail} placeholder="E-mail" />

        <S.Button onClick={addNewUser}>
          Cadastrar
          <img src={Arrow} alt="images de seta" />
        </S.Button>
        <S.List onClick={goPageUsers}>
          Listar Usuários
          <img src={User} alt="images de usuarios" />
        </S.List>
      </S.ContainerItems>
    </S.Container>
  )
}
