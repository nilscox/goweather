import * as React from 'react';
import * as renderer from 'react-test-renderer';

import TestEnv from '../../utils/TestEnv';

import PageTitle from '../PageTitle';

test('PageTitle with text', () => {
  const tree = renderer
    .create(
      <TestEnv>
        <PageTitle>Title with text</PageTitle>
      </TestEnv>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('PageTitle with node', () => {
  const tree = renderer
    .create(
      <TestEnv>
        <PageTitle><span>span</span></PageTitle>
      </TestEnv>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
