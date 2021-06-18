
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
    
    useConditionalRendering(mostrarA) {
        if (mostrarA) {
            return <ComponenteA/>        
        } else {
            return <ComponenteB/>        
        }
    }
    render() {
        return (
        <div>
            <h4>Conditional Rendering</h4>
            {this.useConditionalRendering(this.state.mostrarA)}
        </div>
        )
    }
}

ConditionalSection.defaultProps = {
    mostrarA: true
}