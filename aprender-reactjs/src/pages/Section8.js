import { Component } from 'react';

//Custom components
import CicloDeVida1 from '../components/ciclo-de-vida/CicloDeVida1';
import CicloDeVida2 from '../components/ciclo-de-vida/CicloDeVida2';
import CicloDeVida3 from '../components/ciclo-de-vida/CicloDeVida3';

export default class Section8 extends Component {
  render() {
    return (
      <div>    
        {/* <CicloDeVida1/> */}
        {/* <CicloDeVida2/> */}
        <CicloDeVida3/>
      </div>
    );
  }
}

