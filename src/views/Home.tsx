/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const Home = () => (
  <div className="container py-3">

    <div css={inputWrapperStyle} className="p-5">
      <InputGroup>
        <Input placeholder="Search..." />
        <InputGroupAddon addonType="append">
          <InputGroupText>
            <span className="oi oi-magnifying-glass" />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>

    <p className="my-4">
      <strong>Search for a city in the input above.</strong>
    </p>

  </div>
);

const inputWrapperStyle = css`
  background-image: url('/img/sun-cloud.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left 10px top -23px;
`;

export default Home;
