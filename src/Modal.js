import React, { Component } from 'react';
import './App.css';

const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};

class Modal extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            toggle: false
        }
    }

    toggle(event) {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
    }
    render() {
        var modal = [];
        modal.push(
            <div className="modal" style={this.state.toggle ? display : hide}>
                <div className="modal-content">
                    <h4>Vood Modal</h4>
                </div>
                <div className="modal-footer">
                    <a className="btn-flat" onClick={this.toggle}>Close</a>
                </div>
            </div>
        );
        return (
            <div>
                <a className="btn" onClick={this.toggle}>{this.state.toggle ? 'Close modal' : 'Open Modal'}</a>
                {modal}
            </div>
        );
    }
}

export default Modal;