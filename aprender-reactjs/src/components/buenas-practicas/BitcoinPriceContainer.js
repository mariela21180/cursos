import React, {Component} from 'react'
import BitcoinPrice from './BitcoinPrice'

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
            <BitcoinPrice bpi={this.state.bpi} />   
        ) 
    }
}