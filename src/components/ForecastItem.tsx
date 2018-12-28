/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Card, CardText, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

import { IWeather } from '../interfaces';

const ForecastItem = ({ date, description, temperature, humidity, pressure }: IWeather) => (
  <Card css={cardStyle} className="my-2">
    <CardBody>

      <CardTitle>{ date.format('dddd, MMMM Do') }</CardTitle>

      <CardText className="text-center">
        <strong>{ description }</strong>
      </CardText>

      <Container>
        <Row>
          <Col xs="12" sm="4" className="text-center">Temperature: { temperature }°C</Col>
          <Col xs="12" sm="4" className="text-center">Humidity: { humidity }%</Col>
          <Col xs="12" sm="4" className="text-center">Pressure: { pressure }hPa</Col>
        </Row>
      </Container>

    </CardBody>
  </Card>
);

const cardStyle = css`

`;

export default ForecastItem;
