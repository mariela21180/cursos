
import { Component } from 'react';

class ComponenteA extends Component {
    render() {
     return <p>Componente A</p>   
    }
}
class ComponenteB extends Component {
    render() {
     return <p>Componente B</p>   
    }
}


export default class ConditionalSection extends Component {
    constructor (props) {
        super(props)
        this.state = {mostrarA: this.props.mostrarA}
    }
    
    render() {
        return (
        <div>
            {this.state.mostrarA 
                ? <ComponenteA/>
                : <ComponenteB/>
            }
        </div>
        )
    }
}

ConditionalSection.defaultProps = {
    mostrarA: true
}