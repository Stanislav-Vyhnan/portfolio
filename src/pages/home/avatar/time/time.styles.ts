import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Typography } from 'src/pages/common/typography';

export const TimeStyled = styled(Typography)(() => ({
  animation: `${blinker} 3s ease infinite;`,
}));

const blinker = keyframes`
    50% {
      opacity: 0.5;
    }
  `;
