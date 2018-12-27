/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, Redirect } from 'react-router-dom';

import Header from '../components/Header';

import { State } from '../store/state';
import { fetchWeatherFromCityId } from '../store/actions';

const mapStateToProps = (state: State) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchWeather: (cityId: number) => {
    return dispatch(fetchWeatherFromCityId(cityId));
  },
});

type MatchParams = {
  cityId: string,
};

type ForecastProps = {
  fetchWeather: (cityId: number) => any,
} & RouteComponentProps<MatchParams>;

type ForecastState = {
  loading: boolean,
  redirectToHome: boolean,
};

class Forecast extends Component<ForecastProps, ForecastState> {

  public state = {
    loading: true,
    redirectToHome: false,
  };

  public async componentDidMount() {
    const { cityId } = this.props.match.params;

    try {
      const { payload: res } = await this.props.fetchWeather(parseInt(cityId, 10));

      if (!res.ok)
        this.setState({ redirectToHome: true });
    } finally {
      if (!this.state.redirectToHome)
        this.setState({ loading: false });
    }
  }

  public render() {
    if (this.state.redirectToHome)
      return <Redirect to="/" />;

    return (
      <div>
        <Header>Forecast</Header>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
