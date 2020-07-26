import React, { Component } from 'react';

class DemoRef extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => {
            this.ref.current.focus();
        }, 3000);
    }


    render() {
        return (
            <form>
                <input type="text" ref={this.ref} />
            </form>
        )
    }
}

export default DemoRef;