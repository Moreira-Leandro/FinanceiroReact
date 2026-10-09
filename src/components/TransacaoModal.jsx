
import Modal from './Modal';
import TransacaoForm from './TransacaoForm';
import TransacaoLista from './TransacaoLista';
import { tipos, titulos } from '../constants/tipos';

export default function TransacaoModal({modal, transacaos, itemEditado, onEditar, onSalvarEdicao, onFechar}) {

    if(!modal) return null;

    const {acao, tipo} = modal;
    const config = tipos[tipo];
    const transacao = transacaos[tipo];
    const titulo = `${titulos[acao]} ${config.rotulo}`

    const ehFormulario = acao !== 'listar';

    const footer = (
    <>
        <button type="button" className="btn btn-secondary" onClick={onFechar}>Fechar</button>
        {ehFormulario && (
        <button type="submit" form="transacao-form" className="btn btn-primary">Salvar</button>
        )}
    </>
    );

    return (
        <Modal titulo={titulo} onFechar={onFechar} footer={footer
            
        }>
            {
                acao === 'listar' && (
                    <TransacaoLista 
                        itens={transacao.lista}
                        removerTransacao={transacao.remover} 
                        onFechar={onFechar}
                        onEditar={onEditar}
                    />
                )
            }
            {
                acao === 'cadastrar' && (
                    <TransacaoForm
                        rotulo={config.rotulo} 
                        categorias={config.categorias} 
                        onSalvar ={transacao.adicionar}
                        onFechar={onFechar}
                    />
                )
            }
            {
                acao === 'editar' && (
                    <TransacaoForm
                        rotulo={config.rotulo} 
                        categorias={config.categorias} 
                        onSalvar ={onSalvarEdicao}
                        onFechar={onFechar}
                        inicial={itemEditado}
                    />
                )
            }
        </Modal>
    )

}