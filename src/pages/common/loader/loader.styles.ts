import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { withTransientProps } from 'src/utils/styled.utils';

export const LoaderStyled = styled(
  'p',
  withTransientProps
)<{ $size: number; $borderSize: number }>(({ theme, $size, $borderSize }) => ({
  display: 'inline-block',
  width: `${$size}px`,
  height: `${$size}px`,

  '&:after': {
    content: "''",
    display: 'block',
    width: `${$size * 0.8}px`,
    height: `${$size * 0.8}px`,
    margin: theme.spacing(1),
    borderRadius: '50%',
    border: `${$borderSize}px solid black`,
    borderColor: 'black transparent black transparent',
    animation: `${spinner} 1.2s linear infinite`,
  },
}));

const spinner = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
