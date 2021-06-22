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
        console.clear()
        //nextProps puede ser diferente a la actual this.props.animal, pero al método va a entrar igual. 
        console.log('5. componentWillReceiveProps', nextProps)
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal]})
    }
    
    shouldComponentUpdate(nextProps) {
        console.log('6. shouldComponentUpdate', nextProps)
        //cuando quiero evitar el renderizado según el cambio de props o state que haya recibido, uso este método.
        return this.props.animal !== nextProps.animal
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('7. componentWillUpdate', nextProps, nextState)
        //Si shouldComponentUpdate() es true, entra acá antes de renderizar la actualización. Se usa poco. NO hay que usar el renderState acá, para no hacer un loop infinito
        const img = document.querySelector('img')
        console.log('from img element ', {alt: img.alt})
        img.animate([{
            filter: 'blur(0px)'
        },{
            filter: 'blur(2px)'
        }], {duration: 500, easing: 'ease'})
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('8. componentDidUpdate', prevProps, prevState)
        const img = document.querySelector('img')
        img.animate([{
            filter: 'blur(2px)'
        },{
            filter: 'blur(0px)'
        }], {duration: 1500, easing: 'ease'})
        console.log('from img element ', {alt: img.alt})
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
        return (
            <div>
                <h3>Ciclo de Actualización:</h3>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}/>
                <p>Luego del primer renderizado, al clickear los botones se disparan actualizaciones:</p>
                <h4>5. componentWillReceiveProps(nextProps)</h4>     
                <p>El src del state de AnimalImage se tiene que actualizar cada vez que cambia el prop animal con el click de cada botón. Para esto hay que usar el componentWillReceiveProps()</p>
                <h4>6. shouldComponentUpdate(nextProps)</h4>     
                <p>El animal clickeado puede ser diferente al actual o no, pero al método va a entrar igual. Puedo deshabilitar el botón del animal actual, o puedo usar shouldComponentUpdate() para evaluar si renderizo o no segun que recibo (si no se sobreescribe, este método devuelve "true", o sea que siempre se va a renderizar)</p>
                <h4>7. componentWillUpdate(nextProps, nextState)</h4>     
                <p>Si shouldComponentUpdate() es true, entra acá antes de renderizar la actualización. Se usa poco. Es la ultima oportunidad de manipular lo que se va a mostrar antes de renderizarlo (ejemplo, una animación). NO hay que usar el renderState acá, para no hacer un loop infinito</p>
                <h4>8. vuelve a usar el 3. render</h4>     
                <p>La diferencia es que acá usará las nuevas props y evaluará que renderizar. Si se deja de usar algun componente en el updat, tambien hará el un-mount de esos componentes.</p>
                <h4>9. componentDidUpdate(prevProps, prevState)</h4>     
                <p>Luego de renderizar por actualización, este método se dispara con los valores previos como parámetro. es parecido al 4. componentDidMount (se puede llamar a una API por ejemplo, o se puede mandar un elemento untracking para indicar que se agregó algo al DOM, terminar la animación que empecé en 8., etc)</p>
            </div>
        )
    }

}