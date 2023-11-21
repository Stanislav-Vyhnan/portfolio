import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Typography } from 'src/pages/common/typography';

export const TimeStyled = styled(Typography)(() => ({
  animation: `${blinker} 2s ease infinite;`,
  fontWeight: 900,
}));

const blinker = keyframes`
    50% {
      opacity: 0.5;
      fontWeight: 400;
    }
  `;
