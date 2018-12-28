import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TestEnv from '../../utils/TestEnv';

import History from '../History';

test('History', () => {
  const tree = renderer
    .create(<TestEnv><History /></TestEnv>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
