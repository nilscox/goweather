import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TestEnv from '../../utils/TestEnv';

import Header from '../Header';

test('header', () => {
  const tree = renderer
    .create(<TestEnv><Header /></TestEnv>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
