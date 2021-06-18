import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <p>{this.props.title}</p>
    )
  }
}
class Text extends Component {

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

class Contador extends Component {
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Aprender React JS" />
          <a
            className="App-link"
            href="https://www.udemy.com/course/draft/1418884/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Curso
          </a>
          <Text
            arrayOfNumbers={[1, 2, 3]}
            isActivated={false}
            multiply={ (n) => n * 4}
            number={2}
            objectWithInfo={{ key: 'First Value', key2: 'otherValue' }}
            text="Probando"
            title={<h1>Hola</h1>}
          />
          <Contador contadorInicial={100}/>
        </header>
      </div>
    );
  }
}

export default App;
