import TransacaoLista from "../TransacaoLista";

export default function Dashboard({transacao, onEditar}) {

    return(
        <main className="dashboard">
            <section className="painel painel-ganho">
                <div className="painel-cabecalho">
                    <h2 className="painel-titulo">Ganhos recentes</h2>
                </div>
                <TransacaoLista
                    itens={transacao.ganho.lista}
                    removerTransacao={transacao.ganho.remover}
                    onEditar={(item) => onEditar('ganho', item)}
                    limite={5}
                />
            </section>
            <section className="painel painel-gasto">
                <div className="painel-cabecalho">
                    <h2 className="painel-titulo">Gastos recentes</h2>
                </div>
                <TransacaoLista
                    itens={transacao.gasto.lista}
                    removerTransacao={transacao.gasto.remover}
                    onEditar={(item) => onEditar('gasto', item)}
                    limite={5}
                />
            </section>
        </main>
    )

}
