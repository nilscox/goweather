/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Button, Input, InputGroup } from 'reactstrap';

import { State } from '../store/state';
import { fetchWeatherFromCityName } from '../store/actions';

import { addToHistory } from '../services/history-service';

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
      <div className="px-4 pb-4">

        { this.renderForm() }

        <p>
          <strong>Welcome to Weather Forecast!</strong>
        </p>

        <p>
          This website allows you to quickly access the weather forecast for any city.
          You can also view the last search queries using the <em><Link to="/history">History</Link></em> link in the toolbar, so you can quickly retrieve
          the cities you frequently search for.
        </p>

        <p>
          As you also may have noticed, there is a Log in button in the toolbar too. This feature is currently under development, and you will soon
          be informed of its avaibility if you register to the newsletter! But as the newsletter is also under development, don't forget to come around
          and see our progress on this website.
        </p>

        <p>
          We hope you will find this website usefull, feel free to contact us to submit a bug report, or fill a feature request!
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

    if (res.ok) {
      addToHistory({ id: json.city.id, name: json.city.name, country: json.city.country });
      this.setState({ redirectCityId: json.city.id });
    }
  }

}

const formStyle = css`
  max-width: 450px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
