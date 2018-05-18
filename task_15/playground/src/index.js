import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './HelloWorld';
import IntroducingJSX from './IntroducingJSX';
import Clock from './Clock';
import NumberList from './NumberList';
import Form from './Forms';
import Favorites from './Favorites';
import Calculator from './TemperatureCalculator';
import registerServiceWorker from './registerServiceWorker';

// const numbers = [1,2,3,4,5,6];

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
// ReactDOM.render(<IntroducingJSX/>, document.getElementById('root'));
// ReactDOM.render(<Clock/>, document.getElementById('root'));
// ReactDOM.render(<NumberList numbers={numbers}/>, document.getElementById('root'));
// ReactDOM.render(<Form/>, document.getElementById('root'));
// ReactDOM.render(<Favorites/>, document.getElementById('root'));
ReactDOM.render(<Calculator/>, document.getElementById('root'));
registerServiceWorker();
