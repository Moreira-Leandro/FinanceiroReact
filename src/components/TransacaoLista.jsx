
const icones = {
    'Alimentação': 'bi-basket2',
    'Contas Fixas': 'bi-receipt',
    'Salário': 'bi-briefcase',
    'Extra': 'bi-stars',
};

export default function TransacaoLista({itens, removerTransacao, onEditar, limite}) {    
    const visiveis = limite ? itens.slice(-limite).reverse() : itens;

    if (visiveis.length === 0) {
        return <p className="lista-vazia">Nada registrado ainda.</p>;
    }

    return (
        <ul className="lista">
            {visiveis.map((item) => (
                <li key={item.id} className="lista-item">
                    <span className="lista-icone">
                        <i className={`bi ${icones[item.categoria] ?? 'bi-circle'}`}></i>
                    </span>
                    <div className="lista-info">
                        <div className="lista-nome">{item.nome}</div>
                        <div className="lista-categoria">{item.categoria}</div>
                    </div>
                    <span className="lista-valor">
                        {Number(item.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                    <div className="lista-acoes">
                        <button type="button" className="btn btn-icone" aria-label="Editar" title="Editar" onClick={() => onEditar(item)}>
                            <i className="bi bi-pencil"></i>
                        </button>
                        <button type="button" className="btn btn-icone btn-icone-perigo" aria-label="Excluir" title="Excluir" onClick={() => removerTransacao(item.id)}>
                            <i className="bi bi-trash3"></i>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
