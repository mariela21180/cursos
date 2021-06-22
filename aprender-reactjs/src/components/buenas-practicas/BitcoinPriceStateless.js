import React from 'react'


const _renderCurrencies = (bpi) => (
    Object.keys(bpi).map( currency => (
        <div key={currency}>
            1 BTC is {bpi[currency].rate}
            <span>{bpi[currency].code}</span>
        </div>
    ))
)

const BitcoinPriceStateless = ({bpi}) => (
    <div style={{ textAlign: 'left'}}>
        <p>Cuando un componente no tiene state ni usa ningun método del ciclo de vida de los componentes, se puede convertir en funciones puras. Son stateless porque no pueden tener estados internos, sólo se limitan a renderizar lo que reciben por props. <br/>
        Ventajas: no se necesita usar clases, código mas limpio y legible, no se necesita usar "this." ya que son parámetros ahora y no variables, y son más fáciles de entender y de testear.</p>
        <p><strong>Bitcoin Price index</strong></p>
        { _renderCurrencies(bpi) } 
    </div>
)

export default BitcoinPriceStateless