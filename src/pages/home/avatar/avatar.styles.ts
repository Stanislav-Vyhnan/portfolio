import { CSSProperties } from 'react';
import styled from '@emotion/styled';

import { Typography } from 'src/pages/common/typography';

const ukraineFlagColors = {
  blue: '#0057b7',
  yellow: '#ffdd00',
};

export const NameStyled = styled(Typography)(() => ({
  position: 'relative',

  '&:after': {
    position: 'absolute',
    content: "''",
    width: '20px',
    height: '20px',
    borderRadius: '5px',
    background: `linear-gradient(to bottom, ${ukraineFlagColors.blue} 0%,${ukraineFlagColors.blue} 49.99%,${ukraineFlagColors.yellow} 50%,${ukraineFlagColors.yellow} 100%)`,
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },

  '@media screen and (max-width:767px)': {
    fontSize: 20,
  },
}));

const avatarResponsive = {
  width: '250px',
  height: '288px',
} as CSSProperties;

export const AvatarWrapper = styled('div')(() => ({
  width: '320px',
  height: 'min-content',
  marginBottom: '20px',

  '@media screen and (max-width:767px)': { ...avatarResponsive },
}));

export const AvatarImgStyled = styled('img')(() => ({
  width: '320px',
  height: '368px',
  borderRadius: '20px',

  '@media screen and (max-width:767px)': { ...avatarResponsive, height: 'min-content' },
}));
