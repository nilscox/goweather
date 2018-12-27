import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Forecast from './views/Forecast';
import History from './views/History';
import Home from './views/Home';
import NotFound from './views/NotFound';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/forecast/:cityId" component={Forecast} />
        <Route path="/history" component={History} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
