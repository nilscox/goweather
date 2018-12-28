/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Button, Container, Input, InputGroup } from 'reactstrap';

import { PageTitle } from '../components';
import { ICity } from '../interfaces';
import { fetchWeatherFromCityName } from '../store/actions';
import { getHistory, addToHistory } from '../services/history-service';

type HomeProps = {
  fetchWeather: (cityName: string, countryCode: string) => any; // code smell
};

type HomeState = {
  cityName: string;
  countryCode: string;
  redirectCityId: number | null;
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchWeather: (cityName: string, countryCode: string) => {
    return dispatch(fetchWeatherFromCityName(cityName, countryCode));
  },
});

/**
 * Home page. Displays a form allowing to search for a city, along with some information.
 * When a city is searched (and found by the API), it is then added to the search history.
 */
class Home extends Component<HomeProps, HomeState> {

  public state = {
    cityName: '',
    countryCode: '',
    redirectCityId: null,
  };

  public componentDidMount() {
    const history: ICity[] = getHistory();

    if (history.length > 0) {
      this.setState({
        cityName: history[0].name,
        countryCode: history[0].country,
      });
    }
  }

  public render() {
    const { redirectCityId } = this.state;

    if (redirectCityId)
      return <Redirect to={'/forecast/' + redirectCityId} />;

    return (
      <Container className="pb-4">

        <PageTitle>Welcome to GoWeather!</PageTitle>

        <p>
          Search for a location using the form below to see its weather forecast for the 5 next days.
        </p>

        { this.renderForm() }

        <p>
          This website allows you to quickly access the weather forecast for any city.
          You can also view the last search queries using the <em><Link to="/history">History</Link></em> link
          in the toolbar, to quickly retrieve the cities you frequently search for.
        </p>

        <p>
          As you also may have noticed, there is a "Log in" button in the toolbar too. This feature is
          currently under development, and you will soon be informed of its avaibility if you register
          to the newsletter! But as the newsletter is also under development, don't forget to come around
          and see our progress on this website directly...
        </p>

        <p>
          We hope you will find here the information you need. Feel free to contact us to submit a bug
          report, or fill a feature request!
        </p>

      </Container>
    );
  }

  private renderForm() {
    const { cityName, countryCode } = this.state;

    return (
      <form css={formStyle} className="py-3 px-2" onSubmit={e => this.handleSubmit(e)}>

        <InputGroup className="my-1">
          <Input
            placeholder="City"
            value={cityName}
            onChange={e => this.setState({ cityName: e.currentTarget.value })}
          />
        </InputGroup>

        <InputGroup className="my-1">
          <Input
            placeholder="Country code"
            value={countryCode}
            onChange={e => this.setState({ countryCode: e.currentTarget.value })}
          />
        </InputGroup>

        <Button type="submit">Submit</Button>

      </form>
    );
  }

  private async handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cityName = this.state.cityName.trim();
    const countryCode = this.state.countryCode.trim();

    if (!cityName.length || !countryCode.length)
      return;

    const { payload } = await this.props.fetchWeather(cityName, countryCode);
    const { res, json } = payload;

    if (res.ok) {
      const { city } = json;

      addToHistory({ id: city.id, name: city.name, country: city.country });
      this.setState({ redirectCityId: city.id });
    }
  }

}

const formStyle = css`
  max-width: 450px;
`;

export default connect(null, mapDispatchToProps)(Home);
