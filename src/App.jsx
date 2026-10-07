import { useState } from 'react'
import { useTransacao } from './hooks/useTransacao'
import { tipos } from './constants/tipos'
import TransacaoModal from './components/TansacaoModal';


function App() {

  const [modal, setModal] = useState(null);
  const [itemEditando, setItemEditando] = useState(null);

  const transacaos = {
    ganho: useTransacao(tipos.ganho.recurso),
    gasto: useTransacao(tipos.gasto.recurso)
  }
  
  const abrir = (acao, tipo) => setModal({acao, tipo});
  const fecharModal = () => setModal(null);

  const tipoAtual = modal?.tipo;

  function editar(item) {
    setItemEditando(item);
    abrir('editar', tipoAtual);
  }

  async function salvarEdicao(dados) {
    await transacaos[tipoAtual].atualizar(itemEditando?.id, dados);
    setItemEditando(null);
    abrir('listar', tipoAtual);
  }


  return (
    <>
      <button onClick={() => abrir('cadastrar', 'gasto')}>Adicionar gasto</button>
      <button onClick={() => abrir('cadastrar', 'ganho')}>Adicionar ganho</button>
      <button onClick={() => abrir('listar', 'gasto')}>Listar gasto</button>
      <button onClick={() => abrir('listar', 'ganho')}>Listar ganho</button>

      <TransacaoModal 
        modal={modal}
        transacaos={transacaos}
        itemEditado={itemEditando}
        onEditar={editar}
        onSalvarEdicao={salvarEdicao}
        onFechar={fecharModal}
      />

    </>
  )
}

export default App
