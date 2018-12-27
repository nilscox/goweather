/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

type SearchInputProps = {
  onTextChange: (text: string) => void;
};

type SearchInputState = {
  searchQuery: string;
};

class SearchInput extends Component<SearchInputProps, SearchInputState> {

  constructor(props: any) {
    super(props);

    this.state = {
      searchQuery: '',
    };
  }

  public render() {
    return (
      <div css={inputWrapperStyle} className="p-5">
        <InputGroup>

          <Input
            placeholder="Search..."
            value={this.state.searchQuery}
            onChange={e => this.onTextChange(e)}
          />

          <InputGroupAddon addonType="append">
            <InputGroupText>
              <span className="oi oi-magnifying-glass" />
            </InputGroupText>
          </InputGroupAddon>

        </InputGroup>
      </div>
    );
  }

  private onTextChange(e: React.FormEvent<HTMLInputElement>) {
    const { value: searchQuery } = e.currentTarget;

    this.setState({ searchQuery });
    this.props.onTextChange(searchQuery);
  }

}

const inputWrapperStyle = css`
  background-image: url('/img/sun-cloud.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left 10px top -23px;
`;

export default SearchInput;
