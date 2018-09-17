import React from 'react';
import Component from 'skylor-component';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Services from './services';

Component.init({ Services });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
