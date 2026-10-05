import { useState, useEffect } from 'react'
import Modal from './Components/Modal'
import TransacaoForm from './Components/TransacaoForm'
import {AdicionarTransacao, ListarTransacoes, RemoverTransacao, AtualizarTransacao} from './Service/TransacaoService'
import TransacaoLista from './Components/TransacaoLista'

const tipos = {
  gasto: { titulo: 'Cadastrar gasto', rotulo: 'gasto', categorias: ['Alimentação', 'Contas Fixas'] },
  ganho: { titulo: 'Cadastrar ganho', rotulo: 'ganho', categorias: ['Salário', 'Extra'] }
}

function App() {

  const [modalAberto, setModalAberto] = useState(null);
  const [ganhoList, setGanhoList] = useState([]);
  const [gastoList, setGastoList] = useState([]);
  const [itemEditando, setItemEditando] = useState(null);

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
    await RemoverTransacao('gastos', id)
    setGastoList(gastoList.filter((item) => item.id !== id))
  }

  async function removerGanho(id) {
    await RemoverTransacao('ganhos', id)
    setGanhoList(ganhoList.filter((item) => item.id !== id))
  }

  async function editarGasto(item) {
    setItemEditando(item);
    setModalAberto('editar-gasto')
  }

  async function editarGanho(item) {
    setItemEditando(item);
    setModalAberto('editar-ganho')
  }

  async function atualizarGasto(nome, valor, categoria) {
    const atualizado = await AtualizarTransacao('gastos', itemEditando?.id, { nome, valor, categoria });
    setGastoList(gastoList.map((item) => item.id === atualizado.id ? atualizado : item));
    setItemEditando(null);
    setModalAberto('listar-gasto');
  }

  async function atualizarGanho(nome, valor, categoria) {
    const atualizado = await AtualizarTransacao('ganhos', itemEditando?.id, { nome, valor, categoria });
    setGanhoList(ganhoList.map((item) => item.id === atualizado.id ? atualizado : item));
    setItemEditando(null);
    setModalAberto('listar-ganho');
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
            <TransacaoLista itens={ganhoList} onFechar={fecharModal} removerTransacao={removerGanho} onEditar={editarGanho}/>
          </Modal>
        )
      }

      {
        modalAberto === 'listar-gasto' && (
          <Modal titulo={tipos.gasto.titulo} onFechar={fecharModal}>
            <TransacaoLista itens={gastoList} onFechar={fecharModal} removerTransacao={removerGasto} onEditar={editarGasto}/>
          </Modal>
        )
      }

      {
        modalAberto === 'editar-ganho' && (
          <Modal titulo={tipos.ganho.titulo} onFechar={fecharModal}>
            <TransacaoForm rotulo={tipos.ganho.rotulo} categorias={tipos.ganho.categorias} inicial={itemEditando} onSalvar={atualizarGanho} onFechar={fecharModal} />
          </Modal>
        )
      }

      {
        modalAberto === 'editar-gasto' && (
          <Modal titulo={tipos.gasto.titulo} onFechar={fecharModal}>
            <TransacaoForm rotulo={tipos.gasto.rotulo} categorias={tipos.gasto.categorias} inicial={itemEditando} onSalvar={atualizarGasto} onFechar={fecharModal}  />
          </Modal>
        )
      }

    </>
  )
}

export default App
