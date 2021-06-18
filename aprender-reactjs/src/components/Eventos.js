import { Component } from 'react';

export default class Eventos extends Component {
  constructor() {
    super()
    this.state = {mouseX: 0, mouseY: 0}
  }

  handleClick (e) {
    //React genera un "evento sintético" compatible crossbrowser
    // console.log(e);
    //Si se quiere acceder al evento nativo se hace así
    // console.log(e.nativeEvent);
    alert('Click con función!')
  }

  handleMouseMove = (e) => {
    // Hay que hacer el método arrow, para enlazar el metodo al contexto correcto, sino el "this" tira error
    const {clientX, clientY} = e
    this.setState({ mouseX: clientX, mouseY: clientY})
  }
  render() {
    return (
      <div>
        <p>Evento onClick</p>
        {/* onClick con camel case es propiedad de React, todo con minuscula es atributo de HTML. No es lo mismo */}
        <button onClick={() => alert('Click!')}>Click con funcion en linea</button>

        <button onClick={this.handleClick}>Click con funcion declarada</button>

        <div 
          onMouseMove={this.handleMouseMove}
          style={{ border: '1px solid #000', marginTop: 10, padding: 10 }}>
            <p>Escuchando el movimiento del mouse</p>
            <p>{this.state.mouseX}, {this.state.mouseY}</p>

        </div>
      </div>
    )
  }
}