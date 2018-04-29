// import geocodCityName from "../utils/geocoding";
// import Component from '../framework/Component';
// import {bindAll, clearChildren} from "../utils";
// import getCurrentUserPosition from '../utils/currentUserPosition';
import React, { Component } from 'react';

class LocationSearch extends Component {
    constructor(props) {
        super();
        this.props = props;
        console.log(this.props);
        this.state = {
            isValid: true,
            city: ''
        };
        this.state.city = this.props.city;
        console.log(this.state.city);
        // bindAll(this, 'handleSubmit');
        this.host = document.createElement('div');
        this.host.id = 'input-search-container';
        this.host.addEventListener('submit', this.handleSubmit);
        // this.host.addEventListener('click', getCurrentUserPosition);
    }

    handleSubmit(ev) {
        ev.preventDefault();
        const city = ev.target.elements.search.value.trim();
        if (!city.length) {
            this.updateState({isValid: false});
        } else {
            // geocodCityName(city);
        }
    }

    render() {
        const {isValid} = this.state;
        const city = 'werwerwer';
        return <form className="option {isValid ? 'address' : 'address-invalid'}">
                    <label for="address" id="">
                        <input id="address" type="text" name="search" required className="address-input" placeholder="TYPE CITY NAME" value={city}/>
                    </label>
                    <button id="submit" className="btn-small"></button>
                    <button id="currentPos" className="btn-small"></button>
                </form>;
    }
}

export default LocationSearch;
