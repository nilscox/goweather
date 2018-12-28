/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, Redirect, Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import { PageTitle } from '../../components';
import { ICity, IWeather } from '../../interfaces';
import { State } from '../../store/state';
import { fetchWeatherFromCityId, addHistory } from '../../store/actions';

import ForecastItem from './ForecastItem';

type MatchParams = {
  cityId: string;
};

type ForecastProps = {
  cityName: string;
  days: IWeather[];
  addHistory: (city: ICity) => any, // code smell
  fetchWeather: (cityId: number) => any;
} & RouteComponentProps<MatchParams>;

type ForecastState = {
  loading: boolean;
  redirectToHome: boolean;
};

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
  addHistory: (city: ICity) => dispatch(addHistory(city)),
  fetchWeather: (cityId: number) => {
    return dispatch(fetchWeatherFromCityId(cityId));
  },
});

/**
 * Forecast page. Displays the weather for the 5 next days for a given city.
 * The id URL parameter stores the cityId.
 * If the request to the API fails, then the page redirects to the Home.
 */
class Forecast extends Component<ForecastProps, ForecastState> {

  public state = {
    loading: true,
    redirectToHome: false,
  };

  public async componentDidMount() {
    const { cityId } = this.props.match.params;

    try {
      const { payload } = await this.props.fetchWeather(parseInt(cityId, 10));
      const { res, json } = payload;

      if (res.ok) {
        const { city } = json;

        this.props.addHistory({ id: city.id, name: city.name, country: city.country });
      } else {
        this.setState({ redirectToHome: true });
      }
    } finally {
      // possible race condition?
      if (!this.state.redirectToHome)
        this.setState({ loading: false });
    }
  }

  public render() {
    const { cityName } = this.props;
    const { loading, redirectToHome } = this.state;

    if (redirectToHome)
      return <Redirect to="/" />;

    if (loading)
      return 'Loading...';

    return (
      <Container className="pb-4">

        <PageTitle>Weather in { cityName }</PageTitle>

        <div className="mt-2">
          { this.props.days.map(weather => <ForecastItem key={weather.date.toString()} {...weather} />) }
        </div>

        <div className="py-2">
          <Link to="/">&lt; Home</Link>
        </div>

      </Container>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
