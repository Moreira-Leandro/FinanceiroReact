
export default function NavBar({abrir}){
    return(
        <nav className="nav-home">
            <h1 className="nav-marca">
                <span className="nav-marca-icone">
                    <i className="bi bi-coin"></i>
                </span>
                Sistema financeiro
            </h1>
            <div className="nav-acoes">
                <button className="btn btn-pilula btn-gasto" onClick={() => abrir('cadastrar', 'gasto')}>
                    <i className="bi bi-dash-lg"></i>Novo gasto
                </button>
                <button className="btn btn-pilula btn-ganho" onClick={() => abrir('cadastrar', 'ganho')}>
                    <i className="bi bi-plus-lg"></i>Novo ganho
                </button>
            </div>
        </nav>
    );
};
