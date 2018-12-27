/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, Redirect, Link } from 'react-router-dom';

import Header from '../components/Header';

import { State, IWeather } from '../store/state';
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
      <div>

        <Header>
          { cityName ? 'Weather in ' + cityName : 'Weather Forecast' }
        </Header>

        <div css={listWrapperStyle} className="py-2">
          { this.props.days.map(weather => this.renderWeather(weather)) }
        </div>

        <Link to="/">&lt; Home</Link>

      </div>
    );
  }

  private renderWeather(weather: IWeather) {
    return (
      <div key={weather.date.toString()} css={weatherItemStyle} className="my-2 p-1">
        <strong>{ weather.date.format('dddd, MMMM Do') }</strong>
        <div className="text-center my-1">{ weather.description }</div>
        <small>{ weather.temperature }°C, { weather.humidity }%, { weather.pressure }hPa</small>
      </div>
    );
  }

}

const listWrapperStyle = css`
  max-width: 520px;
`;

const weatherItemStyle = css`
  background-color: #FFFFFF66;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
