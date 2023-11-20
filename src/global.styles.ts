import { css } from '@emotion/react';

import { theme } from './theme';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;700&display=swap');

  input,
  button,
  body {
    font-family: ${theme.typography.fontFamily};
  }

  body,
  html,
  #root {
    height: 100%;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5;
    background: ${theme.palette.mainGradient};
  }

  button {
    line-height: 1;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
`;
