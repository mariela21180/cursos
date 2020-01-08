import React from 'react';
import './Footer.sass';

const Footer = () => {
    return (
        <div className="App">
            <footer className="footer is-primary">
            <div className="container">
                <div className="columns">
                <div className="column">
                    <p>And this right here is a spiffy footer, where you can put stuff.</p>
                </div>
                <div className="column has-text-right">
                    <a className="icon" href="#"><i className="fa fa-facebook-f"></i></a>
                    <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
                </div>
                </div>
            </div>
            </footer>
        </div>
    );
}

export default Footer;
