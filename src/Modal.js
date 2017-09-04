import React, { Component } from 'react';
import './App.css';
import { ButtonToolbar, Button } from 'react-bootstrap';

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
                <div className="modal-footer">
                    <ButtonToolbar>
                        <Button className="btn btn-primary btn-lg" onClick={this.toggle}>End Demo</Button>
                    </ButtonToolbar>
                </div>
            </div>
        );
        return (
            <div className="buttons">
                <ButtonToolbar>
                <Button className="btn btn-primary btn-lg demo" onClick={this.toggle}>{this.state.toggle ? 'End Demo' : 'Start Demo'}</Button>
                {modal}
                </ButtonToolbar>
            </div>
        );
    }
}

export default Modal;