
import { useState } from 'react'
import Modal from './Components/Modal'
import TransacaoForm from './Components/TransacaoForm'

const tipos = {
  gasto: { titulo: 'Cadastrar gasto', rotulo: 'gasto', categorias: ['Alimentação', 'Contas Fixas'] },
  ganho: { titulo: 'Cadastrar ganho', rotulo: 'ganho', categorias: ['Salário', 'Extra'] }
}

function App() {

  const [modalAberto, setModalAberto] = useState(null);

  function adicionarGasto(nome, valor, categoria) {
    setGastoList([...gastoList, { nome, valor, categoria }]);
  }

  function adicionarGanho(nome, valor, categoria) {
    setGanhoList([...ganhoList, { nome, valor, categoria }]);
  }

  const fecharModal = () => setModalAberto(null);

  return (
    <>
      <button onClick={() => setModalAberto('gasto')}>Adicionar gasto</button>
      <button onClick={() => setModalAberto('ganho')}>Adicionar ganho</button>

      {modalAberto === 'gasto' && (
        <Modal titulo={tipos.gasto.titulo} onFechar={fecharModal}>
          <TransacaoForm rotulo="tipos.gasto.rotulo" categorias={tipos.gasto.categorias}
            onSalvar={adicionarGasto} onFechar={fecharModal} />
        </Modal>
      )}

      {modalAberto === 'ganho' && (
        <Modal titulo={tipos.ganho.titulo} onFechar={fecharModal}>
          <TransacaoForm rotulo="tipos.ganho.rotulo" categorias={tipos.ganho.categorias}
            onSalvar={adicionarGanho} onFechar={fecharModal} />
        </Modal>
      )}
    </>
  )
}

export default App
