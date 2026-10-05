import { useState, useEffect } from 'react'
import Modal from './Components/Modal'
import TransacaoForm from './Components/TransacaoForm'
import {AdicionarTransacao, ListarTransacoes} from './Service/TransacaoService'

const tipos = {
  gasto: { titulo: 'Cadastrar gasto', rotulo: 'gasto', categorias: ['Alimentação', 'Contas Fixas'] },
  ganho: { titulo: 'Cadastrar ganho', rotulo: 'ganho', categorias: ['Salário', 'Extra'] }
}

function App() {

  const [modalAberto, setModalAberto] = useState(null);
  const [ganhoList, setGanhoList] = useState([]);
  const [gastoList, setGastoList] = useState([]);

  useEffect(() => {
    ListarTransacoes('gastos').then(setGastoList);
    ListarTransacoes('ganhos').then(setGanhoList);
  }, []);

  async function adicionarGasto(nome, valor, categoria) {
    const novo = await AdicionarTransacao('gastos', {nome, valor, categoria});
    setGastoList([...gastoList, novo]);
  }

  async function adicionarGanho(nome, valor, categoria) {
    const novo = await AdicionarTransacao('ganhos', {nome, valor, categoria});
    setGanhoList([...ganhoList, novo]);
  }

  const fecharModal = () => setModalAberto(null);

  return (
    <>
      <button onClick={() => setModalAberto('gasto')}>Adicionar gasto</button>
      <button onClick={() => setModalAberto('ganho')}>Adicionar ganho</button>

      {modalAberto === 'gasto' && (
        <Modal titulo={tipos.gasto.titulo} onFechar={fecharModal}>
          <TransacaoForm rotulo={tipos.gasto.rotulo} categorias={tipos.gasto.categorias}
            onSalvar={adicionarGasto} onFechar={fecharModal} />
        </Modal>
      )}

      {modalAberto === 'ganho' && (
        <Modal titulo={tipos.ganho.titulo} onFechar={fecharModal}>
          <TransacaoForm rotulo={tipos.ganho.rotulo} categorias={tipos.ganho.categorias}
            onSalvar={adicionarGanho} onFechar={fecharModal} />
        </Modal>
      )}
    </>
  )
}

export default App
