import React, {Component} from 'react';

class NumberList extends Component {
    constructor(props) {
        super(props);
        this.numbers = props.numbers;
    }

    render() {
        return (
            this.numbers.map((number) =>
                <li key={number.toString()}>{number}</li>
            ));
    }
}

export default NumberList;
