import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TestEnv from '../../utils/TestEnv';

import NotFound from '../NotFound';

test('NotFound', () => {
  const tree = renderer
    .create(<TestEnv><NotFound /></TestEnv>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
