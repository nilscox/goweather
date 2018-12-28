import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import Footer from '../Footer';

test('Footer', () => {
  const tree = renderer
    .create(<Router><Footer /></Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
