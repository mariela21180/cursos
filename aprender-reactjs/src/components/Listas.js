import { Component } from 'react';

export default class Listas extends Component {
  render() {
    const numbers = [1, 1, 3, 4]
    return (
        <div>
            Trabajando con Listas
            {numbers.map((number,index)=> <p key={index}>Soy el número {number}</p>)}
            
        </div>
    )
  }
}