import { useState, useEffect } from 'react'
import Modal from './Components/Modal'
import TransacaoForm from './Components/TransacaoForm'
import {AdicionarTransacao, ListarTransacoes, RemoverTransacao} from './Service/TransacaoService'
import TransacaoLista from './Components/TransacaoLista'

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

  async function removerGasto(id) {
    const novo = await RemoverTransacao('gastos', id)
    setGastoList(gastoList.filter((item) => item.id != id))
  }

  async function removerGanho(id) {
    const novo = await RemoverTransacao('ganhos', id)
    setGanhoList(ganhoList.filter((item) => item.id != id))
  }

  const fecharModal = () => setModalAberto(null);

  return (
    <>
      <button onClick={() => setModalAberto('cadastrar-gasto')}>Adicionar gasto</button>
      <button onClick={() => setModalAberto('cadastrar-ganho')}>Adicionar ganho</button>
      <button onClick={() => setModalAberto('listar-gasto')}>Listar gasto</button>
      <button onClick={() => setModalAberto('listar-ganho')}>Listar ganho</button>


      {modalAberto === 'cadastrar-gasto' && (
        <Modal titulo={tipos.gasto.titulo} onFechar={fecharModal}>
          <TransacaoForm rotulo={tipos.gasto.rotulo} categorias={tipos.gasto.categorias}
            onSalvar={adicionarGasto} onFechar={fecharModal} />
        </Modal>
      )}

      {modalAberto === 'cadastrar-ganho' && (
        <Modal titulo={tipos.ganho.titulo} onFechar={fecharModal}>
          <TransacaoForm rotulo={tipos.ganho.rotulo} categorias={tipos.ganho.categorias}
            onSalvar={adicionarGanho} onFechar={fecharModal} />
        </Modal>
      )}

      {
        modalAberto === 'listar-ganho' && (
          <Modal titulo={tipos.ganho.titulo} onFechar={fecharModal}>
            <TransacaoLista itens={ganhoList} onFechar={fecharModal} removerTransacao={removerGanho}/>
          </Modal>
        )
      }

      {
        modalAberto === 'listar-gasto' && (
          <Modal titulo={tipos.gasto.titulo} onFechar={fecharModal}>
            <TransacaoLista itens={gastoList} onFechar={fecharModal} removerTransacao={removerGasto}/>
          </Modal>
        )
      }
    </>
  )
}

export default App
