import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
