import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
const Usuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    //Llamado a API
    reqResApi.get<ReqResListado>('/users')
      .then( resp => {
        setUsuarios(resp.data.data)
      })
      .catch( console.log )
  }, [])
  
  return (
    <>
      <h3>Usuarios</h3>
      <p>
        <a href="http://reqres.in" target="_blank" rel="noopener noreferrer">REQ|RES - Página de Fake data - Fake API</a>
      </p>
      <p>
        <a href="http://npmjs.com/package/axios" target="_blank" rel="noopener noreferrer">Axios</a>
      </p>
      <p>
        <a href="http://app.quicktype.io" target="_blank" rel="noopener noreferrer">quicktype - Página para crear interfaces a partir de un JSON - Usar extensión "Paste JSON as Code" para eso mismo</a>
      </p>
      <table className="table">
        <thead>
            <tr>
              <th>Avatar</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </>
  )
}

Usuarios.propTypes = {}

export default Usuarios