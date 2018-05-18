import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isTicking: true
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.state.isTicking) {
            clearInterval(this.timerID);
            this.setState({isTicking: false})
        } else {
            this.timerID = setInterval(() => this.tick(), 1000);
            this.setState({isTicking: true});
        }
    };

    render() {
        return (<div>
            <h1>Local Time is:</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
            <button type='button' className='' value='stop' onClick={this.handleClick}>
                {this.state.isTicking ? 'STOP' : 'START'}
            </button>
        </div>);
    }

}

export default Clock;
