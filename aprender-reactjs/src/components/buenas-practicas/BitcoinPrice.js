import React, {Component} from 'react'

export default class BitcoinPrice extends Component {
    state = { bpi: {} }
    
    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json()) 
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

    render() {
     return <div style={{'text-align': 'left'}}>
                <p><strong>Bitcoin Price index</strong></p>
                { this._renderCurrencies() } 
            </div>   
    }
}