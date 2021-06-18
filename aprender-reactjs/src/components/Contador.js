
import { Component } from 'react';

export default class Contador extends Component {
  constructor (props) {
    super(props)
    this.state = {contador: this.props.contadorInicial}
    
    setInterval(() => {
      this.setState({contador: this.state.contador + 1 })
    }, 1000)
  }

  render() {
    const contador = 0 

    return (
      <div>
        <p>{contador}</p> 
        <p>{this.state.contador}</p>
      </div>
    )
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}