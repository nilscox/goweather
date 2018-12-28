/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type PageTitleProps = {
  /**
   * Title text
   */
  children: React.ReactNode,
};

/**
 * Display a bold centered text to be used as a title.
 */
const PageTitle = ({ children }: PageTitleProps) => (
  <h1 css={titleStyle} className="text-center py-4">
    { children }
  </h1>
);

const titleStyle = css`
  font-size: 20px;
  font-weight: bold;
`;

export default PageTitle;
