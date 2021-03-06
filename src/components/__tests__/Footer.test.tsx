import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TestEnv from '../../utils/TestEnv';

import Footer from '../Footer';

test('Footer', () => {
  const tree = renderer
    .create(<TestEnv><Footer /></TestEnv>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
