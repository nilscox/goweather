/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import { ICity } from '../interfaces';
import { PageTitle } from '../components';
import { getHistory } from '../services/history-service';

type HistoryState = {
  cities: ICity[];
};

/**
 * History page. Displays a list of cities that have already been searched.
 */
class History extends Component<{}, HistoryState> {

  public state = {
    cities: [],
  };

  public componentDidMount() {
    this.setState({ cities: getHistory() });
  }

  public render() {
    const { cities } = this.state;

    return (
      <Container className="pb-4">

        <PageTitle>Search history</PageTitle>

        <Container>
          { cities.map((city: ICity) => (
            <Link
              key={city.id}
              to={'/forecast/' + city.id}
              className="d-block py-2 px-4 m-2 bg-light"
            >
              { city.name } ({ city.country })
            </Link>
          )) }
        </Container>

      </Container>
    );
  }

}

export default History;
