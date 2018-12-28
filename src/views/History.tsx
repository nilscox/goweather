/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import { State } from '../store/state';
import { ICity } from '../interfaces';
import { PageTitle } from '../components';

type HistoryProps = {
  cities: ICity[];
};

const mapStateToProps = (state: State) => ({
  cities: state.history,
})

/**
 * History page. Displays a list of cities that have already been searched.
 */
class History extends Component<HistoryProps> {

  public render() {
    const { cities } = this.props;

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

export default connect(mapStateToProps)(History);
