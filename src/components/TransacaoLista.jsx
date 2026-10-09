
export default function TransacaoLista({itens, removerTransacao, onEditar}) {    
    return (
        <>
                <ul className="list-group">
                    {itens.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">
                            <span>{item.nome} - ({item.categoria})</span>
                            <span>R$: {item.valor}</span>
                            <button onClick={() => removerTransacao(item.id)}>Excluir</button>
                            <button onClick={() => onEditar(item)}>Editar</button>
                        </li>
                    ))}
                </ul>
        </>
    )
}