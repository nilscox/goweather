/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Forecast from './views/Forecast';
import History from './views/History';
import Home from './views/Home';
import NotFound from './views/NotFound';

const App = () => (
  <Router>
    <div css={wrapperStyle}>
      <div className="container py-3">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/forecast/:cityId" component={Forecast} />
          <Route path="/history" component={History} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);

const wrapperStyle = css`
  min-height: 100%;
  background-image: url('/img/background.jpg');
  background-size: cover;
  background-opacity: 0.2;
`;

export default App;
