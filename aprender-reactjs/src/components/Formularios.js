import { Component } from 'react';

export default class Formularios extends Component {
  state = {
    inputName: 'A',
    inputLastname: 'B',
    inputTerms: true
  }

  //Con click en el boton enviar y capturando valores de los inputs (lo ideal es hacerlo por state en realidad)
  handleClick = (e) => {
    e.preventDefault()

    //Accediendo por dom (NO RECOMENDADO)
    const name = document.getElementById('name').value
    //Accediendo por ref (forma React)
    const lastname = this.inputLastname.value

    console.log({name, lastname});
    
  }

  //Con método en el submit - el boton no necesita tener nada
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    
  }

  handleChange = (e) => {
    console.log('terms');
    console.log(e.target.checked);
    this.setState({inputTerms: e.target.checked})
  }

  render() {
    return (
      <div>
        <h4>Formularios</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Nombre:</label>
            <input 
              id='name'
              name='userName'
              onChange={e => this.setState({inputName: e.target.value})}
              placeholder='Ingresa tu nombre'
              value={this.state.inputName}
            />
          </p>
          <p>
            <label htmlFor="lastname">Apellido:</label>
            <input 
              id='lastname'
              name='userLastname'
              onChange={e => this.setState({inputLastname: e.target.value})}
              placeholder='Ingresa tu nombre'
              ref={inputElement => this.inputLastname = inputElement}
              value={this.state.inputLastname}
            />
          </p>
          <p>
            <label>
              <input
                checked={this.state.inputTerms}
                type='checkbox'
                onChange={this.handleChange}/>
                Accepted terms
            </label>
          </p>
          {/* <button onClick={this.handleClick}>Enviar</button> */}
          <button>Enviar</button>
        </form>
      </div>
    )
  }
}