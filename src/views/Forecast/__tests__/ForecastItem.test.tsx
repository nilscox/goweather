import * as React from 'react';
import * as renderer from 'react-test-renderer';
import * as moment from 'moment';

import TestEnv from '../../../utils/TestEnv';

import ForecastItem from '../ForecastItem';

test('ForecastItem', () => {
  const tree = renderer
    .create(
      <TestEnv>
        <ForecastItem
          date={moment('2018-04-06 13:42')}
          description="light rain"
          humidity={100}
          pressure={1037.7}
          temperature={1.3}
        />
      </TestEnv>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
