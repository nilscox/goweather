/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { loadHistory } from './store/actions';

import Forecast from './views/Forecast';
import History from './views/History';
import Home from './views/Home';
import NotFound from './views/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

type AppProps = {
  loadHistory: () => any,
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadHistory: () => dispatch(loadHistory()),
});

class App extends Component<AppProps> {

  public componentDidMount() {
    this.props.loadHistory();
  }

  public render() {
    return (
      <Router>
        <div css={wrapperStyle}>

          <div className="container px-0">

            <Header />

            <div css={pageStyle}>
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/forecast/:cityId" component={Forecast} />
                <Route path="/history" component={History} />
                <Route component={NotFound} />
              </Switch>
            </div>

            <Footer />

          </div>

        </div>
      </Router>
    );
  }

}

const wrapperStyle = css`
  min-height: 100%;
  background-image: url('/img/background.jpg');
  background-size: cover;
  background-attachment: fixed;
`;

const pageStyle = css`
  background-color: #FFFFFF66;
  min-height: 360px;
  border: 1px solid #CCCCCC;
  border-top: 0;
`;

export default connect(null, mapDispatchToProps)(App);
