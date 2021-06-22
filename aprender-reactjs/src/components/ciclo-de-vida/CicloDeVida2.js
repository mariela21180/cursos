import React, {Component} from 'react';
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    panda: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/26/3c/87.jpg',
    cat: 'https://www.alleycat.org/wp-content/uploads/2014/06/About_PhotoBanners_344x361.jpg',
    dolphin: 'https://pyxis.nymag.com/v1/imgs/260/250/46184df43c05ab8634927f8848667b5ca7-dolphin-beauty-lede.rvertical.w330.jpg',
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps(nextProps) {
        //nextProps puede ser diferente a la actual this.props.animal, pero al método va a entrar igual. 
        console.log('5. componentWillReceiveProps')
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal]})
    }
    
    shouldComponentUpdate(nextProps) {
        console.log('6. shouldComponentUpdate')
        //cuando quiero evitar el renderizado según el cambio de props o state que haya recibido, uso este método.
        return this.props.animal !== nextProps.animal
    }

    render() {
        console.log('3. render');
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src} // El src del state se tiene que actualizar cada vez que cambia el prop animal. Para esto hay que usar el componentWillReceiveProps()
                    width='250'
                />
            </div>
        )
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

AnimalImage.defaultProps = {
    animal: 'panda'
}

export default class CicloDeVida2 extends Component {
    state = { animal: 'panda' }
   
    _renderAnimalButton = (animal) => {
        return (
            <button key={animal} onClick={() => this.setState({ animal })}>
                {animal}
            </button>
        )
    }
    render() {
        console.log('render');
        return (
            <div>
                <h3>Ciclo de Actualización:</h3>
                <h4>5. componentWillReceiveProps</h4>     
                <p>El src del state de AnimalImage se tiene que actualizar cada vez que cambia el prop animal con el click de cada botón. Para esto hay que usar el componentWillReceiveProps()</p>
                <h4>6. shouldComponentUpdate</h4>     
                <p>El animal clickeado puede ser diferente al actual o no, pero al método va a entrar igual. Puedo deshabilitar el botón del animal actual, o puedo usar shouldComponentUpdate() para evaluar si renderizo o no segun que recibo (si no se sobreescribe, este método devuelve "true", o sea que siempre se va a renderizar)</p>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}/>
            </div>
        )
    }

}