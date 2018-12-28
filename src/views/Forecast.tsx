/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, Redirect, Link } from 'react-router-dom';

import ForecastItem from '../components/ForecastItem';

import { IWeather } from '../interfaces';
import { State } from '../store/state';
import { fetchWeatherFromCityId } from '../store/actions';

const mapStateToProps = (state: State) => {
  if (!state.weather)
    return { cityName: state.cityName, days: [] };

  const days = state.weather.filter((item: IWeather) => item.date.hour() === 12);

  if (state.weather[0].date.hour() > 12)
    days.unshift(state.weather[0]);

  return {
    cityName: state.cityName,
    days: days.slice(0, 5),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchWeather: (cityId: number) => {
    return dispatch(fetchWeatherFromCityId(cityId));
  },
});

type MatchParams = {
  cityId: string,
};

type ForecastProps = {
  cityName: string,
  days: IWeather[],
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
      const { payload } = await this.props.fetchWeather(parseInt(cityId, 10));
      const { res } = payload;

      if (!res.ok)
        this.setState({ redirectToHome: true });
    } finally {
      if (!this.state.redirectToHome)
        this.setState({ loading: false });
    }
  }

  public render() {
    const { cityName } = this.props;
    const { redirectToHome } = this.state;

    if (redirectToHome)
      return <Redirect to="/" />;

    return (
      <div className="container">

        <h3 className="text-center py-4">Weather in { cityName }</h3>

        <div className="mt-2">
          { this.props.days.map(weather => <ForecastItem key={weather.date.toString()} {...weather} />) }
        </div>

        <div className="py-2">
          <Link to="/">&lt; Home</Link>
        </div>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
