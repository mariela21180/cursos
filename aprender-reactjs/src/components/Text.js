import { Component } from 'react';

export default class Text extends Component {

    render() {
      const {
        arrayOfNumbers,
        isActivated,
        multiply,
        number,
        objectWithInfo,
        text,
        title
      } = this.props
  
      const textoSegunBool = isActivated ? 'On' : 'Off'
      const mapperNumbers = arrayOfNumbers.map( multiply )
  
      return (
        <div>
          <p>{title}</p>
          <p>{text}</p>
          <p>{number}</p>
          <p>{textoSegunBool}</p>
          <p>{mapperNumbers.join(', ')}</p>
          <p>{objectWithInfo.key}</p>
        </div>
      )
    }
}


Text.defaultProps = {
    title: <h1>Título</h1>
  }
  