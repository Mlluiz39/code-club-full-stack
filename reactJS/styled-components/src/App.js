import * as S from './styles'

const App = () => {
  const hello = 'Hello React'
  const paragraph = 'Vamos de react'
  return (
    <S.Container>
      <S.H1>{hello}</S.H1>
      <S.P>{paragraph}</S.P>
    </S.Container>
  )
}

export default App
