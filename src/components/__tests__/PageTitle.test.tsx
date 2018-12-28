import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import PageTitle from '../PageTitle';

test('PageTitle with text', () => {
  const tree = renderer
    .create(
      <Router>
        <PageTitle>Title with text</PageTitle>
      </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('PageTitle with node', () => {
  const tree = renderer
    .create(
      <Router>
        <PageTitle><span>span</span></PageTitle>
      </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
