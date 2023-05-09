import { useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
const Usuarios = () => {

  useEffect(() => {
    //Llamado a API
    reqResApi.get('/users')
      .then( resp => {
        console.log(resp.data.data)
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