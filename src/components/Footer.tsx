/** @jsx jsx */
import { css, jsx } from '@emotion/core'

/**
 * Displays a footer with some very useful links.
 */
const Footer = () => (
  <footer css={footerStyle} className="text-muted text-center py-2">
    Made with ♥ by <a className="text-muted" href="https://github.com/nilscox">nilscox</a> for <a className="text-muted" href="https://gojob.com">gojob</a>.
  </footer>
);

const footerStyle = css`
  font-size: 10px;
`;

export default Footer;
