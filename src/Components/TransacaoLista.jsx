
export default function TransacaoLista({itens, onFechar}) {    
    return (
        <>
            <div className="modal-body">
                <ul className="list-group">
                    {itens.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">
                            <span>{item.nome} - ({item.categoria})</span>
                            <span>R$: {item.valor}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="modal-footer">
                <button type="button" onClick={onFechar}>Fechar</button>
            </div>
        </>
    )
}