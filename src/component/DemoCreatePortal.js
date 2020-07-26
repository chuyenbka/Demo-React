import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const el = document.createElement('div');
document.body.appendChild(el);

class DemoCreatePortal extends Component {

    render() {
        return ReactDOM.createPortal(
            <h1 className="overlay"> Create Portal 
            { this.props.children }
             <span className="close" onClick={this.props.handleCloseModal}> X </span>
            </h1>
            , el
        )
    }
}

export default DemoCreatePortal;