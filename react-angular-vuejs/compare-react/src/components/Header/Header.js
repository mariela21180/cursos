import React, { Component } from 'react';
import './Header.sass';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    MyCompany
                </Link>
                <a
                    href="#"
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">

                <div className="navbar-end">
                    <Link to="/" className="navbar-item r-item">Home</Link>
                    <Link to="/faq" className="navbar-item r-item">Features</Link>
                    <Link to="/faq" className="navbar-item r-item">About</Link>
                    <Link to="/faq" className="navbar-item r-item">FAQ</Link>
                    <div className="navbar-item">
                    <div className="buttons">
                        <a  href="#" className="button is-primary is-outlined">
                        <span className="icon">
                            <i className="fa fa-download"></i>
                        </span> 
                        <span>
                            JOIN NOW
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </nav>
      </div>
    );
  }
}

export default Header;
