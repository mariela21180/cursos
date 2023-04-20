import { useState } from 'react'

export const ContadorConHook = () => {

    const [valor, setValor] = useState<number>(10);

    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    return (
        <>
            <h3>Contador con Hook: <small>{ valor }</small></h3>

            <button
                className='btn btn-primary'
                onClick={() => acumular(1)}
                >
                +1
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={() => acumular(-1)}
            >
                -1
            </button>
        </>
    )
}
