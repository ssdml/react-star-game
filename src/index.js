import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StarGame from './StarGame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StarGame />, document.getElementById('root'));
registerServiceWorker();
