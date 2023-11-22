import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Typography } from 'src/pages/common/typography';

export const Intro = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.mainGradient,
  zIndex: 200,
}));

export const IntroContainer = styled('div')(() => ({
  height: '100%',
  width: '100%',
}));

export const IntroTextStyled = styled(Typography)(({ theme }) => ({
  width: '100vw',
  height: '130px',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 210,

  '& span': {
    position: 'absolute',
    left: '50%',
    top: '150px',
    content: '""',
    animation: `${blinker} 1500ms ease infinite;`,
  },

  ...theme.mixins.transition('top'),

  '@media screen and (max-width:485px)': {
    marginBottom: theme.spacing(13),
  },
}));

const blinker = keyframes`
    50% {
      opacity: 20%;
    }
  `;
