import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: '',
            options: ['option 1', 'option 2']
        };
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    handleTextField = (event) => {
        this.setState({text: event.target.value});
    };


    addOption = (event) => {
        event.preventDefault();
        const options = this.state.options;
        options.push(event.target.value);
        this.setState({options: options});
    };

    render() {
        return (
            <div className='form-wrapper'>
                <div>{this.state.name.toUpperCase()}</div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input value={this.state.name} type='text' onChange={this.handleChange}/>
                    </label>
                    <label>
                        About yourself:
                        <textarea value={this.state.text} onChange={this.handleTextField}></textarea>
                    </label>
                    <label>
                        Options:
                        <select>
                            {this.state.options.map((option) => <option>{option}</option>)}
                        </select>
                    </label>
                    <input type='button' value='Add option' onClick={this.addOption}/>
                    <input type='submit' value='submit form'/>
                </form>
            </div>
        )
    }
}

export default Form;
