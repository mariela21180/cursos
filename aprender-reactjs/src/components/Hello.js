import { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
        <div>
            <p>{this.props.title}</p>
            <a
                className="App-link"
                href="https://www.udemy.com/course/draft/1418884/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Curso
            </a>

        </div>
    )
  }
}