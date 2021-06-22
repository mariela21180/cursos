import React, {Component, component} from 'react';
import PropTypes from 'prop-types'

class Box extends Component {
    render() {
        return (
            <div style={{border: '1px solid #000', margin: 5, padding: 5}}>
                {this.props.children}
            </div>
        )
    }
}

class Article extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired
    }
    
    render() {
        const {title, author, date, children} = this.props
        return (
            <section>
                <h2>{title}</h2>
                <p><em>Escrito por {author}</em></p>
                <Box>{date}</Box>
                <article>{children}</article>
            </section>
        )
    }
}

export default class ChildrensYPropTypes extends Component {
    render() {
        return <div style={{textAlign: 'left', padding:15}}>
            <h4>Children props</h4>
            <Article
                title="Artículo 1"
                author="Mariela"
                date={new Date().toLocaleDateString()}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Article>
            <Article
                title="Artículo 2"
                author="Pepe"
                date={new Date().toLocaleDateString()}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Article>
            <Article
                title="Otro Artículo"
                author="Mario"
                date={new Date().toLocaleDateString()}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Article>
        </div>
    }
}

