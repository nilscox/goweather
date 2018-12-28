/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

import { clearHistory } from '../store/actions';
import { State } from '../store/state';
import { ICity } from '../interfaces';
import { PageTitle } from '../components';

type HistoryProps = {
  cities: ICity[];
  clearHistory: () => any;
};

const mapStateToProps = (state: State) => ({
  cities: state.history,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearHistory: () => dispatch(clearHistory()),
})

/**
 * History page. Displays a list of cities that have already been searched.
 */
const History = ({ cities, clearHistory }: HistoryProps) => (
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

      <Button onClick={clearHistory}>Clear</Button>

    </Container>

  </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(History);
