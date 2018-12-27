/** @jsx jsx */
import { jsx } from '@emotion/core'

type HeaderProps = {
  children: string;
};

const Header = ({ children }: HeaderProps) => (
  <div>
    <h2>{ children }</h2>
  </div>
);

export default Header;
