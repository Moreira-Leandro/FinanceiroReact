
import { useState } from 'react'
import './GastoForm'
import GastoForm from './GastoForm';

const gastos = [{}]

export default function GastoService({fecharModal}) {

    const[gastoList, setGastoList] = useState(gastos);

    function adicionarGasto(nome, valor, categoria) {
        const novoGasto = {
            nome: nome,
            valor: valor,
            categoria: categoria
        }

        setGastoList([...gasto, novoGasto]);

    }

    return(
        <>
            <GastoForm adicionarGasto={adicionarGasto} fecharModal={fecharModal}/>
        </>
    );


}