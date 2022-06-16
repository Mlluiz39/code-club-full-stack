import * as S from './styles'

import People from './assets/peoples.svg'
import Arrow from './assets/arrow.svg'

function App() {
  return (
    <S.Container>
      <S.Image src={People} alt="logo imagem" />
      <S.ContainerItems>
        <S.H1>Olá!</S.H1>

        <S.InputLabel>Nome</S.InputLabel>
        <S.Input placeholder="Nome" />

        <S.InputLabel>E-mail</S.InputLabel>
        <S.Input placeholder="E-mail" />

        <S.Button>
          Cadastrar
          <img src={Arrow} alt="imagem de seta" />
        </S.Button>
      </S.ContainerItems>
    </S.Container>
  )
}

export default App
