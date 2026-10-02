
import { useState } from 'react'
import GanhoContainer from './Components/GanhoComponents/GanhoContainer';
import GastoContainer from './Components/GastoComponents/GastoContainer';

function App() {

  const[modalStatus, setModalStatus] = useState(null);

  return (
    <>
      <button onClick={() => setModalStatus('gasto')}>Adicionar gasto</button>
      <button onClick={() => setModalStatus('ganho')}>Adicionar ganho</button>

      {modalStatus == 'gasto' && <GastoContainer fecharModal={() => setModalStatus(null)}/>}
      {modalStatus == 'ganho' && <GanhoContainer fecharModal={() => setModalStatus(null)}/>}
    </>

  )
}

export default App
