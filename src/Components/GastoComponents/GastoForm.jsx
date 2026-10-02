import { useState } from "react";

export default function GastoForm({adicionarGasto, fecharModal}) {

    const [nomeGasto, setNomeGasto] = useState('');
    const [valorGasto, setValorGasto] = useState('');
    const [categoriaGasto, setCategoriaGasto] = useState('');

    function addGasto() {
        event.preventDefault();

        adicionarGasto(nomeGasto, valorGasto, categoriaGasto)

        setNomeGasto('');
        setValorGasto('');
        setCategoriaGasto('');

    }

    return (
        <>
            <div className="modal d-block" tabIndex={1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={addGasto}>
                            <div className="modal-header">
                                <h1>Cadastrar Dados</h1>
                            </div>
                            <div className="modal-body">
                                    <label>Nome do gasto</label>
                                    <input type="text" placeholder="nome gasto..." value={nomeGasto} onChange={(event) => setNomeGasto(event.target.value)}></input>

                                    <label>Valor do gasto</label>
                                    <input type="number" value={valorGasto} onChange={(event) => setValorGasto(event.target.value)}></input>

                                    <label>Categoria do gasto</label>
                                    <select value={categoriaGasto} onChange={(event) => setCategoriaGasto(event.target.value)}>
                                        <option value="1">Alimentacao</option>
                                        <option value="2">Contas Fixas</option>
                                    </select>
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={fecharModal}>fechar</button>
                                <button type="submit">salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    );

}