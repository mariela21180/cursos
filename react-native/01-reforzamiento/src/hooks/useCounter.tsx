import { useState } from 'react';

export const useCounter = (initial: number = 10) => {

  const [valor, setValor] = useState<number>(initial);

  const acumular = (numero: number) => {
      setValor(valor + numero);
  }

  return {
    valor,
    acumular
  }
  
}
