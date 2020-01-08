import React, { Component } from 'react';
import './Header.sass';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {isToggleOn: false};

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
      }))
  }
  render() {

    let menuActive = this.state.isToggleOn ? 'is-active' : '';
    return (
      <div className="App">
          <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    MyCompany
                </Link>
                <span className={'navbar-burger burger '+menuActive} onClick={this.handleClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </span>
                </div>

                <div id="navbarBasicExample" className={'navbar-menu '+menuActive}>

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
