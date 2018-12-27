/** @jsx jsx */
import { jsx } from '@emotion/core'

type HeaderProps = {
  children: string;
};

const Header = ({ children }: HeaderProps) => (
  <div>
    <h1>{ children }</h1>
  </div>
);

export default Header;
