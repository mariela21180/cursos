import React, {Component} from 'react';

class ComponenteADesmontar extends Component {
    state = { windowWidth: 0 }

    componentDidMount() {
        this._updateStateWindowWidth()
        window.addEventListener( 'resize', this._updateStateWindowWidth)
    }

    componentWillUnmount() {
        console.log('10. componentWillUnmount');
        window.removeEventListener('resize', this._updateStateWindowWidth)

    }

    _updateStateWindowWidth = () => {
        this.setState({ windowWidth: document.body.clientWidth })
    }

    render() {
        console.log('3. render');
        return (
            <div>
                <p>Componente A Desmontar</p>
                <p>Ancho de la ventana: {this.state.windowWidth}</p>
            </div>
        )
    }
}

export default class CicloDeVida3 extends Component {
    state = { mostrarComponente: true }

    render() {
        if (this.state.mostrarComponente) {
            return (
                <div>
                    <h3>Ciclo de Desmontaje:</h3>
                    <h4>10. componentWillUnmount()</h4>     
                    <p>Se ejecuta justo antes de desmontar el componente. Permite eliminar suscripciones de eventos, cancelar peticiones, limpiar intervalos y liberar recursos.</p>
                    <ComponenteADesmontar/>         
                    <button onClick={() => this.setState({ mostrarComponente: false })}>
                        Desmontar componente
                    </button>       
                </div>
            )
        }

        return (
            <p>Componente desmontado</p>
        )
    }

}