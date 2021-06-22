import React, {Component} from 'react'

export default class BitcoinPrice extends Component {

    _renderCurrencies() {
        const { bpi } = this.props
        const currencies = Object.keys(bpi)
        return currencies.map( currency => (
            <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span>{currency}</span>
            </div>
        ))
    }

    render() {
        return (
            <div style={{ textAlign: 'left'}}>
                <p><strong>Bitcoin Price index</strong></p>
                { this._renderCurrencies() } 
            </div>
        )
    }
}