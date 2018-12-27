/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Component } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';

import Header from '../components/Header';

type HomeProps = {};

type HomeState = {
  cityName: string;
  countryCode: string;
};

class Home extends Component<HomeProps, HomeState> {

  public state = {
    cityName: '',
    countryCode: '',
  };

  public render() {
    return (
      <div className="container py-3">

        <Header title="Weather Forecast" />

        { this.renderForm() }
        { this.renderContent() }

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

  private renderContent() {
    return (
      <p className="my-4">
        <strong>Search for a city in the inputs above.</strong>
      </p>
    );
  }

  private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

}

const formStyle = css`
  max-width: 450px;
`;

export default Home;
