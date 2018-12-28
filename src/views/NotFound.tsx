import * as React from 'react';
import { Container } from 'reactstrap';

import { PageTitle } from '../components';

/**
 * Not found page. Displays an error message when the URL does not match
 * any route defined by the router.
 */
const NotFound = () => (
  <Container className="pb-4">
    <PageTitle>404 - Page not found.</PageTitle>
  </Container>
);

export default NotFound;
