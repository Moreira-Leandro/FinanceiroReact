import { useState } from 'react'
import { useTransacao } from './hooks/useTransacao'
import { tipos } from './constants/tipos'
import TransacaoModal from './components/TransacaoModal';
import TransacaoForm from './components/TransacaoForm';
import TransacaoLista from './components/TransacaoLista';
import NavBar from './components/nav-bar/NavBar';
import Dashboard from './components/dashboard/Dashboard';


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

  function editar(tipo, item) {
    setItemEditando(item);
    abrir('editar', tipo);
  }

  async function salvarEdicao(dados) {
    await transacaos[tipoAtual].atualizar(itemEditando?.id, dados);
    setItemEditando(null);
    fecharModal();
  }


  return (
    <>
    <NavBar abrir={abrir}/>
    <Dashboard transacao={transacaos} onEditar={editar}/>
    
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
