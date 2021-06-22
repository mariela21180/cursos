import React, {Component} from 'react';

class BotonLanzarError extends Component {
    state = { throwError: false }

    render() {
        console.log('3. render');
        if (this.state.throwError) {
            throw new Error('Error lanzado por el botón')
        }
        return (
            <div>
                <button onClick={() => this.setState({throwError: true })}>
                    Lanzar error!
                </button>
            </div>
        )
    }
}

export default class CicloDeVida4 extends Component {
    state = { hasError: false, errorMsg: '' }


    componentDidCatch(error, info) {
        console.log('11. componentDidCatch', error, info);
        console.log({ error, info });
        this.setState({ hasError: true, errorMsg: error.toString() })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Error en en componente: {this.state.errorMsg}</p>
                    <button onClick={() => this.setState({hasError: false, errorMsg: '' })}>Volver a la aplicación</button>
                </div>
            )
        }
        return (
            <div>
                <h3>Ciclo de Error:</h3>
                <h4>11. componentWillUnmount(error, info)</h4>     
                <p>Se ejecuta sólo cuando el componente lanza una Exception. Permite manejar errores y excepciones. También captura excepciones de los children, por lo que hay que usarlo en un nivel superior. Si hay un error no controlado, se va a desmontar el arbol de componente hasta encontrar el método que lo controla, o hasta que no quede nada montado. Para evitar el desmonte por completo, hay que usar este método.</p>
                <BotonLanzarError/>     
            </div>
        )
    }

}