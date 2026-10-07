
import { useState } from "react";

export default function TransacaoForm({rotulo, categorias, onSalvar, onFechar, inicial}) {
    const [nome, setNome] = useState(inicial?.nome ?? '');
    const [valor, setValor] = useState(inicial?.valor ?? '');
    const [categoria, setCategoria] = useState(inicial?.categoria ?? '');

    function salvar(event) {
        event.preventDefault();
        onSalvar({nome, valor, categoria});

        setNome('');
        setValor('');
        setCategoria('');
    }

    return (
        <form onSubmit={salvar}>
        <div className="modal-body">
            <label className="form-label">Nome do {rotulo}</label>
            <input className="form-control mb-2" required
            value={nome} onChange={(e) => setNome(e.target.value)} />

            <label className="form-label">Valor do {rotulo}</label>
            <input className="form-control mb-2" type="number" step="0.01" required
            value={valor} onChange={(e) => setValor(e.target.value)} />

            <label className="form-label">Categoria</label>
            <select className="form-select" required
            value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Selecione...</option>
            {categorias.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
            </select>
        </div>

        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onFechar}>Fechar</button>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </div>
        </form>
    );
}