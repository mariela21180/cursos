
import { Component } from 'react';

class LoginButton extends Component {
    render() {
     return <button>Iniciar Sesión</button>   
    }
}
class LogoutButton extends Component {
    render() {
     return <button>Cerrar Sesión</button>   
    }
}


export default class ConditionalSection extends Component {
    constructor (props) {
        super(props)
        this.state = {isUsedLogged: this.props.isUsedLogged}
    }
    
    render() {
        return (
        <div>
            {this.state.isUsedLogged 
                ? <LoginButton/>
                : <LogoutButton/>
            }
        </div>
        )
    }
}

ConditionalSection.defaultProps = {
    isUsedLogged: true
}