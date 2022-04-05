import { Container, H1, P } from './styles'

const App = () => {
  const hello = 'Hello React'
  const paragraph = 'Vamos de react'
  return (
    <Container>
      <H1>{hello}</H1>
      <P>{paragraph}</P>
    </Container>
  )
}

export default App
