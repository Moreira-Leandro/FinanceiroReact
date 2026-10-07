import { useEffect, useState } from "react";
import { atualizarTransacao, listarTransacoes, removerTransacao, adicionarTransacao} from "../service/transacaoService";

export function useTransacao(tipo) {

    const[lista, setLista] = useState([]);

    useEffect(() => {
        listarTransacoes(tipo).then(setLista)
    }, [tipo]);

    async function adicionar(dados) {
        const novo = await adicionarTransacao(tipo, dados)
        setLista(prev => [...prev, novo])
    };

    async function remover(id) {
        await removerTransacao(tipo, id)
        setLista(prev => prev.filter(i => i.id !== id))
    };

    async function atualizar(id, dados) {
        const atualizado = await atualizarTransacao(tipo, id, dados);
        setLista(prev => prev.map((item) => item.id === atualizado.id ? atualizado : item));
    }

    return { lista, adicionar, remover, atualizar };

}