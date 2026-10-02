import { useState } from "react";

export default function GanhoForm({adicionarGanho, fecharModal}) {

    const [nomeGanho, setNomeGanho] = useState('');
    const [valorGanho, setValorGanho] = useState('');
    const [categoriaGanho, setCategoriaGanho] = useState('');

    function addGanho(event) {
        event.preventDefault();
        
        adicionarGanho(nomeGanho, valorGanho, categoriaGanho)

        setNomeGanho('');
        setValorGanho('');
        setCategoriaGanho('');

    }

    return (
        <>
            <div className="modal d-block" tabIndex={1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={addGanho}>
                            <div className="modal-header">
                                <h1>Cadastrar Dados</h1>
                            </div>
                            <div className="modal-body">
                                    <label>Nome do ganho</label>
                                    <input type="text" placeholder="nome ganho..." value={nomeGanho} onChange={(event) => setNomeGanho(event.target.value)}></input>

                                    <label>Valor do ganho</label>
                                    <input type="number" value={valorGanho} onChange={(event) => setValorGanho(event.target.value)}></input>

                                    <label>Categoria do ganho</label>
                                    <select value={categoriaGanho} onChange={(event) => setCategoriaGanho(event.target.value)}>
                                        <option value="1">Salario</option>
                                        <option value="2">Extra</option>
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