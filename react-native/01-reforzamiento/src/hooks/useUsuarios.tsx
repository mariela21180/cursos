import { useEffect, useState, useRef } from 'react';
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  const paginaRef = useRef(1);
  

  useEffect(() => {
    //Llamado a API
    // cargarUsuarios();
  }, [])

  const cargarUsuarios = async() => {
    //Llamado a API dentro de una función Async
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current
      }
    })    

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
      paginaRef.current ++;
    } else {
      alert('No hay mas registros');
    }

  }

  return {
    usuarios,
    cargarUsuarios
  }

}
