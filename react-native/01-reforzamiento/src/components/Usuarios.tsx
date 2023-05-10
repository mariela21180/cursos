import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

const Usuarios = () => {
  
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios()

  const renderItem = ( { id, avatar, first_name, last_name, email }: Usuario) => {
    return (      
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 35,
              borderRadius: 100
            }}
          />
          </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }
  
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
          { usuarios.map( renderItem ) }
        </tbody>
      </table>

      <button
        className='btn btn-primary'
        onClick={paginaAnterior}
      >
        Anteriores
      </button>
      &nbsp;
      <button
        className='btn btn-primary'
        onClick={paginaSiguiente}
      >
        Siguientes
      </button>
    </>
  )
}

Usuarios.propTypes = {}

export default Usuarios