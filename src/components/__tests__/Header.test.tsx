import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import Header from '../Header';

test('header', () => {
  const tree = renderer
    .create(<Router><Header /></Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
