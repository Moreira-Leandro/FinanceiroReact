
const api_url = 'http://localhost:3001';

export async function listarTransacoes(tipo) {
    const resposta = await fetch(`${api_url}/${tipo}`);

    return resposta.json();
}

export async function adicionarTransacao(tipo, dados) {
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

export async function removerTransacao(tipo, id) {
    await fetch(
        `${api_url}/${tipo}/${id}`,
        {
            method: 'DELETE'
        }
    )
}

export async function atualizarTransacao(tipo, id, dados) {
    const resposta = await fetch(
        `${api_url}/${tipo}/${id}`,
        {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dados)
        }
    )
    return resposta.json();
}
