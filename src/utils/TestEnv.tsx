import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import store from '../store';

type TestEnvProps = {
  children: React.ReactNode;
};

const TestEnv = ({ children }: TestEnvProps) => (
  <Provider store={store}>
    <Router>
      { children }
    </Router>
  </Provider>
);

export default TestEnv;
