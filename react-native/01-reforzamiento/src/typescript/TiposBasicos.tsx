export const TiposBasicos = () => {

  const nombre: string = 'Mariela';
  const edad: number = 42;
  const estaActivo: boolean = true;

  const poderes: string[] = [ 'Velocidad', 'Teletransportación', 'Energía']
  return (
    <>
      <h3>TiposBasicos</h3>
      { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
      <br/>
      { poderes.join(', ')}
    </>
  )
}
