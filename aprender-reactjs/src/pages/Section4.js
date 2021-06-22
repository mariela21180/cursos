import { Component } from 'react';

//Custom components
import ConditionalSection from '../components/ConditionalSection';
import Listas from '../components/Listas';
import Eventos from '../components/Eventos';
import Formularios from '../components/Formularios';
import ChildrensYPropTypes from '../components/ChildrensYPropTypes';

export default class Section4 extends Component {
  render() {
    return (
      <div>        
        <ConditionalSection isUsedLogged={true}/>
        <hr/>
        <Listas/>
        <hr/>
        <Eventos/>
        <hr/>
        <ChildrensYPropTypes/>
        <hr/>
        <Formularios/>
      </div>
    );
  }
}

