import * as C from './styles'
import './App.css'

function App() {
  const hello = 'Hello World'
  return (
    <>
      <C.Container>
        <div className="container">
          <h1>{hello}</h1>
          <C.H2>Paragrafo com styled-components</C.H2>
        </div>
      </C.Container>
    </>
  )
}

export default App
