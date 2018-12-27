import * as React from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class Home extends React.Component {

  public render() {
    return (
      <div className="p-5">

        <InputGroup>
          <Input placeholder="Search..." />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <span className="oi oi-magnifying-glass" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <p className="my-4">Search for a city in the input above.</p>

      </div>
    );
  }

}

export default Home;
