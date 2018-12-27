/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Input, InputGroup } from 'reactstrap';

import Header from '../components/Header';

import { State } from '../store/state';
import { fetchWeatherFromCityName } from '../store/actions';

const mapStateToProps = (state: State) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchWeather: (cityName: string, countryCode: string) => {
    return dispatch(fetchWeatherFromCityName(cityName, countryCode));
  },
});

type HomeProps = {
  fetchWeather: (cityName: string, countryCode: string) => any,
};

type HomeState = {
  cityName: string;
  countryCode: string;
  redirectCityId: number | null,
};

class Home extends Component<HomeProps, HomeState> {

  public state = {
    cityName: '',
    countryCode: '',
    redirectCityId: null,
  };

  public render() {
    const { redirectCityId } = this.state;

    if (redirectCityId)
      return <Redirect to={'/forecast/' + redirectCityId} />;

    return (
      <div>

        <Header>Weather Forecast</Header>

        { this.renderForm() }

        <p className="my-4">
          <strong>Search for a city in the inputs above.</strong>
        </p>

      </div>
    );
  }

  private renderForm() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} css={formStyle} className="py-5 px-2">

        <InputGroup className="my-1">
          <Input
            placeholder="City"
            value={this.state.cityName}
            onChange={e => this.setState({ cityName: e.currentTarget.value })}
          />
        </InputGroup>

        <InputGroup className="my-1">
          <Input
            placeholder="Country code"
            value={this.state.countryCode}
            onChange={e => this.setState({ countryCode: e.currentTarget.value })}
          />
        </InputGroup>

        <Button type="submit">Submit</Button>

      </form>
    );
  }

  private async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { cityName, countryCode } = this.state;

    const { payload } = await this.props.fetchWeather(cityName, countryCode);
    const { res, json } = payload;

    if (res.ok)
      this.setState({ redirectCityId: json.city.id });
  }

}

const formStyle = css`
  max-width: 450px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
