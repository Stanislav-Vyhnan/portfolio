import { CSSProperties } from 'react';
import styled from '@emotion/styled';

import { withTransientProps } from 'src/utils/styled.utils';
import { Typography } from 'src/pages/common/typography';

export const CardStyled = styled(
  'li',
  withTransientProps
)<{ $backgroundColor: string }>(({ theme, $backgroundColor }) => ({
  width: '218px',
  height: '218px',
  margin: theme.spacing(1.5),
  listStyle: 'none',
  borderRadius: '20px',
  position: 'relative',
  backgroundColor: $backgroundColor,
  cursor: 'pointer',
  boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.50)',

  ...theme.mixins.transition('transform', 'boxShadow'),

  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '10px 10px 10px 0px rgba(0, 0, 0, 0.50)',
  },
}));

export const CardImage = styled(
  'img',
  withTransientProps
)<{ $isBlur: boolean }>(({ $isBlur }) => ({
  width: '218px',
  height: '218px',
  borderRadius: '20px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  filter: $isBlur ? 'blur(1px)' : 'none',
}));

export const CardTitle = styled(
  Typography,
  withTransientProps
)<{ $styles: CSSProperties }>(({ $styles }) => ({
  width: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  userSelect: 'none',

  ...$styles,
}));
