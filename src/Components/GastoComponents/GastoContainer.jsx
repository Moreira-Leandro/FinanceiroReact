
import { useState } from 'react'
import './GastoForm'
import GastoForm from './GastoForm';

const gastos = [{}]

export default function GastoContainer({fecharModal}) {

    const[gastoList, setGastoList] = useState(gastos);

    function adicionarGasto(nome, valor, categoria) {
        const novoGasto = {
            nome: nome,
            valor: valor,
            categoria: categoria
        }

        setGastoList([...gastoList, novoGasto]);

    }

    return(
        <>
            <GastoForm adicionarGasto={adicionarGasto} fecharModal={fecharModal}/>
        </>
    );


}