import { Component } from 'react';
import cars from '../data/cars.json'

class CarItem extends Component {
  render() {    
    const {car} = this.props
    return (
      <li>
        {car.name}
      </li>
    )
  }
}

export default class Listas extends Component {
  render() {
    const numbers = [1, 1, 3, 4]
    return (
        <div>
            <h4>Trabajando con Listas de números en un Array</h4>
            {numbers.map((number,index)=> <p key={index}>Soy el número {number}</p>)}

            
            <h4>Trabajando con Listas de Objetos en un JSON</h4>
            <ul>
              {cars.map( car => {
                return <CarItem key={car.id} car={car}/>
              })}
            </ul>
            
        </div>
    )
  }
}