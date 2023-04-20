interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNO: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Mariela',
        edad: 42,
        direccion: {
            pais: 'Argentina',
            casaNO: 963
        }
    }

  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                { JSON.stringify( persona, null, 2 )}
            </pre>
        </code>
    </>
  )
}
