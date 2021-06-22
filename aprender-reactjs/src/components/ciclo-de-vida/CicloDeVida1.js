import React, {Component, component} from 'react';

export default class CicloDeVida1 extends Component {
    /* ORDEN DE LOS MÉTODOS X BUENAS PRÁCTICAS 
        1. constructor (siempre primero)
        2. métodos del ciclo del vida en el orden que se ejecutan
        3. métodos custom
        4. render (siempre último)
    */

    constructor(props) {
        console.log('constructor');
        super(props) // mandamos las props al constructor de Component
        this.state = { 
            mensajeInicial: 'Mensaje Inicial',
            scroll: 0,
            bpi: {}
        } // Inicializamos el state de nuestro componente
        // this.handleClick = this.handleClick.bind(this) // En el constructor tambien se bindean los eventos, pero la forma más común de hacerlo es con función flecha en el método, en luhar de con este bind
        console.log(this.state.mensajeInicial);
    }
    
    componentWillMount() {
        console.log('componentWillMount');
        this.setState({ mensajeInicial: 'Mensaje modificado'}) // Se puede setear el estado acá. Normalmente se hace directamente en el constructor, pero si el constructor es muy grande, se puede limpiar codigo sacando el seteo del state a este método
    }

    componentDidMount() {
        console.log('componentDidMount');
        // Acá podemos hacer llamadas a resuperar datos del servidor y escucha eventos, o actualizar estado y props
        this.setState({ otroState: ''}) // Se puede setear estados acá. El render() se va a disparar de nuevo, pero no el DidMount
        document.addEventListener('scroll', () =>  { 
            // hay que usar arrow function en el listener si es que vamos a actualizar el state, para que el this no de error y se ejecute en el contexto correcto
            this.setState({ scroll: window.scrollY });
        })
        // Acá también podemos traer datos del servidor o una API. Ejemplo con una api de bitcoins
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json()) // transformo la respuesta (que es un promise) en un json, dado que mi state.bpi es un objeto
        .then(data => {
            const { bpi } = data
            this.setState ( { bpi })
        })
    }
    
    _renderCurrencies() {
        const { bpi } = this.state
        const currencies = Object.keys(bpi)
        return currencies.map( currency => (
            <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span>{currency}</span>
            </div>
        ))
    }
    
    handleClick = () => {
        this.setState({ mensajeInicial: 'Mensaje cambiado'})
    }

    render() {
        console.log('render');
        /* En este método sólo se debe retornar algo: 
        - un numero:
            return 3
        - un string:
            return  <div>
                        <h1>Hola>/h1>
                    </div>
        - otro componente:
            return <HelloComponent/>
        - null si no queremos que renderice nada:
            return null
        - renderizado condicional con una ternaria:
            return mensajeInicial === 'si' ? 'Hola' : null
        - un array de elementos:
            return [
                <h1 key='1'>Hola</h1>,
                <HelloComponent key='2'/>,
                <HelloComponent key='3'/>,
                <h1 key='4'>Chau</h1>
            ]        
        */
        // No debe modificar nada del state o props porque generaría un loop. Para modificar están los otros métodos
        return (
            <div>
                <h3>Ciclo de Montaje:</h3>
                <h4>constructor</h4>
                {this.state.mensajeInicial}
                <br/>
                <button onClick={this.handleClick}>
                    Cambiar mensaje
                </button>
                <h4>componentWillMount</h4>
                <p>El mensaje inicial se seteó a modificado antes del render</p>
                <h4>componentDidMount</h4>
                <p><strong>Bitcoin Price index</strong></p>
                { this._renderCurrencies() } 
                <p>Como queremos añadir un evento al scroll, imprimimos mucho contenido</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Massa sapien faucibus et molestie ac feugiat sed. Justo donec enim diam vulputate ut pharetra sit. Amet volutpat consequat mauris nunc congue nisi vitae. Facilisis volutpat est velit egestas. Turpis cursus in hac habitasse. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Ullamcorper eget nulla facilisi etiam dignissim. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Enim lobortis scelerisque fermentum dui faucibus in. Sed augue lacus viverra vitae congue eu consequat ac. Ipsum dolor sit amet consectetur adipiscing elit. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Etiam sit amet nisl purus in mollis nunc. Lectus sit amet est placerat in. Et egestas quis ipsum suspendisse. Lectus quam id leo in.

                Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Senectus et netus et malesuada fames ac. Orci dapibus ultrices in iaculis nunc sed augue lacus. Tempor nec feugiat nisl pretium fusce id velit. Arcu cursus vitae congue mauris rhoncus aenean. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu non sodales neque sodales. Enim blandit volutpat maecenas volutpat blandit. Nulla pharetra diam sit amet nisl suscipit adipiscing. Enim facilisis gravida neque convallis a cras. Et egestas quis ipsum suspendisse ultrices.

                Enim sed faucibus turpis in. Commodo ullamcorper a lacus vestibulum sed arcu. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Gravida neque convallis a cras semper. Morbi blandit cursus risus at ultrices mi tempus. Pharetra massa massa ultricies mi quis. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Sed blandit libero volutpat sed cras ornare arcu dui. Vestibulum sed arcu non odio. Pharetra vel turpis nunc eget lorem. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi.

                Faucibus ornare suspendisse sed nisi lacus. Amet nisl suscipit adipiscing bibendum est ultricies integer. Massa sed elementum tempus egestas sed sed risus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Nisi scelerisque eu ultrices vitae auctor eu. Sed turpis tincidunt id aliquet risus feugiat in ante. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Eget nunc lobortis mattis aliquam faucibus purus in. Enim tortor at auctor urna nunc id cursus. Condimentum id venenatis a condimentum vitae sapien pellentesque. Eu augue ut lectus arcu bibendum at.

                Aliquam vestibulum morbi blandit cursus risus. Tristique senectus et netus et. Massa sed elementum tempus egestas. Odio tempor orci dapibus ultrices. In eu mi bibendum neque egestas. Eu facilisis sed odio morbi. Scelerisque in dictum non consectetur a erat nam at lectus. Amet cursus sit amet dictum. Auctor eu augue ut lectus. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend.

                Tincidunt id aliquet risus feugiat. Aliquam ultrices sagittis orci a scelerisque purus semper. Quis auctor elit sed vulputate mi sit amet mauris commodo. Varius duis at consectetur lorem donec massa sapien faucibus. Tempor nec feugiat nisl pretium fusce id velit ut. Eget magna fermentum iaculis eu non diam phasellus. Et egestas quis ipsum suspendisse. Quam quisque id diam vel quam elementum. Non quam lacus suspendisse faucibus. Nunc consequat interdum varius sit amet mattis. Et netus et malesuada fames. Sed pulvinar proin gravida hendrerit lectus a. Accumsan in nisl nisi scelerisque eu. Lectus urna duis convallis convallis. Praesent tristique magna sit amet purus gravida quis blandit. Sit amet nisl suscipit adipiscing bibendum est ultricies integer.

                In mollis nunc sed id semper risus in hendrerit. Amet mattis vulputate enim nulla. At urna condimentum mattis pellentesque id. Ipsum consequat nisl vel pretium lectus quam id leo in. Nisl purus in mollis nunc sed id semper risus in. Libero justo laoreet sit amet cursus. Enim tortor at auctor urna nunc id cursus metus aliquam. Massa sapien faucibus et molestie ac feugiat sed. Quis eleifend quam adipiscing vitae. Quis lectus nulla at volutpat diam ut. Tellus at urna condimentum mattis pellentesque id nibh.

                In dictum non consectetur a erat. In est ante in nibh. Lacinia at quis risus sed vulputate odio ut enim. Ut lectus arcu bibendum at varius vel pharetra. In ornare quam viverra orci sagittis. Nam at lectus urna duis convallis convallis. Mi eget mauris pharetra et ultrices neque ornare aenean. Eget sit amet tellus cras adipiscing enim eu. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Vitae congue eu consequat ac felis donec et. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Varius morbi enim nunc faucibus a pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Quisque non tellus orci ac. Urna et pharetra pharetra massa massa ultricies mi quis. Elementum integer enim neque volutpat. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt.

                Porttitor leo a diam sollicitudin tempor id eu. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Est ante in nibh mauris cursus mattis molestie. Magna ac placerat vestibulum lectus mauris. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Malesuada proin libero nunc consequat. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Senectus et netus et malesuada fames. Aliquam ultrices sagittis orci a scelerisque purus. At erat pellentesque adipiscing commodo. Pellentesque pulvinar pellentesque habitant morbi tristique.

                Velit ut tortor pretium viverra. Molestie nunc non blandit massa enim nec dui nunc. Tincidunt dui ut ornare lectus sit. Vulputate sapien nec sagittis aliquam. Risus pretium quam vulputate dignissim suspendisse in est ante in. Dictum varius duis at consectetur lorem. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Cras sed felis eget velit aliquet sagittis id consectetur purus. Ullamcorper malesuada proin libero nunc. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Nisl nisi scelerisque eu ultrices. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Tristique senectus et netus et malesuada fames ac turpis. Diam donec adipiscing tristique risus nec feugiat in. Phasellus faucibus scelerisque eleifend donec pretium vulputate.</p>
                <hr/>           

                
                <h3>Ciclo de Actualización:</h3>
                <h4>componentWillReceiveProps</h4>     
            </div>
        )
    }

}