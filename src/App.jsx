
import { useState } from 'react'
import './Components/GastoService'
import GastoService from './Components/GastoService'

function App() {

  const[modalStatus, setModalStatus] = useState(false);

  return (
    <>
      <button onClick={() => setModalStatus(true)}>Adicionar gasto</button>

      {modalStatus && <GastoService fecharModal={() => setModalStatus(false)}/>}
    </>

  )
}

export default App
