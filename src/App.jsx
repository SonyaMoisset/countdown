import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deadline: 'March 24, 2020',
            newDeadline: ''
        }
    }

    handleChange = (event) => { this.setState({ newDeadline: event.target.value })}

    handleClick = () => { this.changeDeadline(); }

    changeDeadline() { this.setState({ deadline: this.state.newDeadline }); }

    render() {
        return (
            <div className="wrapper">
                <div className="wrapper-title">Countdown to {this.state.deadline}</div>
                <Clock 
                    deadline={this.state.deadline} />
                <Form inline>
                    <FormControl 
                        className="deadline-input"
                        placeholder="Enter a new date"
                        onChange={this.handleChange} />
                    <Button 
                        onClick={this.handleClick}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}