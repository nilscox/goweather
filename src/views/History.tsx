/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import { ICity } from '../interfaces';

import { getHistory } from '../services/history-service';

type HistoryState = {
  cities: ICity[],
};

class History extends Component<{}, HistoryState> {

  public state = {
    cities: [],
  };

  public componentDidMount() {
    this.setState({ cities: getHistory() });
  }

  public render() {
    return (
      <div>

        <h3 className="text-center py-4">Search history</h3>

        <div className="container">
          { this.state.cities.map((city: ICity) => (
            <Link key={city.id} to={'/forecast/' + city.id}>
              <div className="py-2 px-4 m-2 bg-light">
                  { city.name } ({ city.country })
              </div>
            </Link>
          )) }
        </div>

      </div>
    );
  }

}

export default History;
