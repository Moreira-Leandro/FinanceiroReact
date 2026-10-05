
const api_url = 'http://localhost:3001';

export async function ListarTransacoes(tipo) {
    const resposta = await fetch(`${api_url}/${tipo}`);

    return resposta.json();
}

export async function AdicionarTransacao(tipos, dados) {
    const resposta = await fetch(
        `${api_url}/${tipo}`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dados)
        }
    )

    return resposta.json();
}

