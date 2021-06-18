import logo from '../assets/img/logo.svg';
import { Component } from 'react';

//Custom components
import Hello from '../components/Hello';
import Text from '../components/Text';
import Contador from '../components/Contador';

class Section3 extends Component {
    render() {
      return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Hello title="Aprender React JS" />
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
      );
    }
  }
  
  export default Section3;
  