import { Component } from 'react';

//Custom components
import ConditionalSection from '../components/ConditionalSection';
import Listas from '../components/Listas';
import Eventos from '../components/Eventos';

export default class Section4 extends Component {
  render() {
    return (
      <div>        
        <ConditionalSection isUsedLogged={true}/>
        <Listas/>
        <Eventos/>
      </div>
    );
  }
}

