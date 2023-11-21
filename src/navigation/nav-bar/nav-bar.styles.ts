import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { withTransientProps } from 'src/utils/styled.utils';

export const NavBarLayoutStyled = styled('div')(() => ({
  width: '100%',
  height: '100%',
}));

const navBarSize = 80;

export const NavBar = styled(
  'div',
  withTransientProps
)<{ $isShow: boolean }>(({ theme, $isShow }) => ({
  position: 'fixed',
  width: `${navBarSize}px`,
  height: `${navBarSize}px`,
  top: '50%',
  transform: 'translateY(-50%)',
  left: $isShow ? '0' : `-${navBarSize}px`,
  zIndex: 105,
  borderRadius: '0px 20px 20px 0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.blue,

  ...theme.mixins.transition('left'),
}));

export const BackButton = styled('button')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  width: '100%',
  height: '100%',
  borderRadius: '0px 20px 20px 0px',
  border: '4px solid black',
  borderLeftWidth: '0px',
  background: theme.palette.blue,
  zIndex: 105,

  ...theme.mixins.transition('background'),

  '&:hover': {
    '& span': { ...theme.mixins.transition('color'), color: theme.palette.white },
    background: theme.palette.mainGradient,
    borderColor: theme.palette.white,
  },
}));

const arrowSize = 35;

export const NavBarIcon = styled(
  'button',
  withTransientProps
)<{ $enableAnimation: boolean }>(({ theme, $enableAnimation }) => ({
  position: 'fixed',
  width: 0,
  height: 0,
  border: 'none',
  borderLeft: `${arrowSize}px solid ${theme.palette.black}`,
  borderTop: `${arrowSize}px solid transparent`,
  borderBottom: `${arrowSize}px solid transparent`,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 50,
  background: 'none',
  left: $enableAnimation ? '70px' : `calc(${navBarSize}px - 6px)`,
  animation: $enableAnimation ? `${blinker} 1s ease infinite;` : 'none',

  '&:hover': {
    borderLeft: `${arrowSize}px solid ${theme.palette.white}`,
  },

  '&:before': {
    position: 'absolute',
    content: '""',
    width: 0,
    height: 0,
    borderLeft: `${arrowSize}px solid ${theme.palette.blue}`,
    borderTop: `${arrowSize}px solid transparent`,
    borderBottom: `${arrowSize}px solid transparent`,
    right: '10px',
    transform: 'translateY(-50%)',
    zIndex: 50,
  },
}));

const blinker = keyframes`
    50% {
      opacity: 70%;
      left: 80px;

      '&:before': {
        right: 15px;
      }
    }
  `;
