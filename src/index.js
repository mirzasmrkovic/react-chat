import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import Chat from './chat.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Chat />, document.getElementById('root'));
registerServiceWorker();
