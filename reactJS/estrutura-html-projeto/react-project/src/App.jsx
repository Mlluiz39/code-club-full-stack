import * as S from './styles'

function App() {
  return (
    <S.Container>
      <S.Image />
      <S.ContainerItems>
        <S.H1>Olá!</S.H1>

        <S.InputLabel>Nome</S.InputLabel>
        <S.Input placeholder="Nome" />

        <S.InputLabel>Idade</S.InputLabel>
        <S.Input placeholder="Idade" />

        <S.Button>Cadastrar</S.Button>
      </S.ContainerItems>
    </S.Container>
  )
}

export default App
