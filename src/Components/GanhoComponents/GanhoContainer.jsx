
import { useState } from 'react'
import './GanhoForm'
import GanhoForm from './GanhoForm';

const ganhos = [{}]

export default function GanhoContainer({fecharModal}) {

    const[ganhoList, setGanhoList] = useState(ganhos);

    function adicionarGanho(nome, valor, categoria) {
        const novoGanho = {
            nome: nome,
            valor: valor,
            categoria: categoria
        }

        setGanhoList([...ganhoList, novoGanho]);

    }

    return(
        <>
            <GanhoForm adicionarGanho={adicionarGanho} fecharModal={fecharModal}/>
        </>
    );


}