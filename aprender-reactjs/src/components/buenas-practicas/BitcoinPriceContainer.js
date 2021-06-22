import React, {Component} from 'react'
import BitcoinPrice from './BitcoinPrice'
import BitcoinPriceStateless from './BitcoinPriceStateless'

export default class BitcoinPriceContainer extends Component {
    state = { bpi: {} }
    
    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json()) 
        .then(data => {
            const { bpi } = data
            this.setState ( { bpi })
        })
    }

    render() {
        return (
            <div>
                <p>Usando componente del patrón contenido</p>
                <BitcoinPrice bpi={this.state.bpi} />   

                <p>Usando componente stateless</p>
                <BitcoinPriceStateless bpi={this.state.bpi} />
            </div>
        ) 
    }
}