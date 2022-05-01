import * as S from './styles'

function App() {
  return (
    <S.Container>
      <S.Image />
      <S.ContainerItens>
        <S.H1>Ola!</S.H1>

        <S.InputLabel>Nome:</S.InputLabel>
        <S.Input placeholder="Nome" />

        <S.InputLabel>Email:</S.InputLabel>
        <S.Input placeholder="Email" />

        <S.Button>Cadastrar</S.Button>
      </S.ContainerItens>
    </S.Container>
  )
}

export default App
