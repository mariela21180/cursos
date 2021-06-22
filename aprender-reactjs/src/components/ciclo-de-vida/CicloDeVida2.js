import React, {Component, component} from 'react';
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    cat: 'https://www.alleycat.org/wp-content/uploads/2014/06/About_PhotoBanners_344x361.jpg',
    dolphin: 'https://pyxis.nymag.com/v1/imgs/260/250/46184df43c05ab8634927f8848667b5ca7-dolphin-beauty-lede.rvertical.w330.jpg',
    panda: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/26/3c/87.jpg'
}

class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps(nextProps) {
        //nextProps puede ser diferente a la actual this.props.animal, pero al método va a entrar igual. 
        console.log('componentWillReceiveProps');
        console.log(nextProps);
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal]})
    }

    render() {
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
    animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
}

AnimalImage.defaultProps = {
    animal: 'panda'
}

export default class CicloDeVida2 extends Component {
    constructor(props) {
        console.log('constructor');
        super(props)
        this.state = { animal: 'panda' }
    }
   
    render() {
        console.log('render');
        return (
            <div>
                <h3>Ciclo de Actualización:</h3>
                <h4>componentWillReceiveProps</h4>     
                <button onClick={() => this.setState({ animal: 'panda' })}>
                    Panda
                </button>
                <button onClick={() => this.setState({ animal: 'cat' })}>
                    Cat
                </button>
                <button onClick={() => this.setState({ animal: 'dolphin' })}>
                    Dolphin
                </button>
                <AnimalImage animal={this.state.animal}/>
            </div>
        )
    }

}