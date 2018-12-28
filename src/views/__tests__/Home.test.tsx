import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TestEnv from '../../utils/TestEnv';

import Home from '../Home';

test('Home', () => {
  const tree = renderer
    .create(<TestEnv><Home /></TestEnv>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
