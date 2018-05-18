import React, {Component} from 'react';

const user = {
    firstName: 'Mike',
    lastName: 'Lane'
};

class IntroducingJSX extends Component {
    constructor() {
        super();
    }

    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    render() {
        if (user) {
            return (<h1>Hello {this.formatName(user)}</h1>);
        } else {
            return (<h1>Hello anonymous</h1>);
        }
    }
}

export default IntroducingJSX;
