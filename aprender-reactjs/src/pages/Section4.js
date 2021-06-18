import { Component } from 'react';

//Custom components
import ConditionalSection from '../components/ConditionalSection';

export default class Section4 extends Component {
  render() {
    return (
      <ConditionalSection isUsedLogged={true}/>
    );
  }
}

