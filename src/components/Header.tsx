/** @jsx jsx */
import { jsx } from '@emotion/core'

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => (
  <div>
    <h1>{ title }</h1>
  </div>
);

export default Header;
