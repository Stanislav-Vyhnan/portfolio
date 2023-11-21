import { CSSProperties } from 'react';

import { theme } from 'src/theme';
import paths from 'src/navigation/paths';

import kallyasLogo from './logos/kallyas.png';
import mogoLogo from './logos/mogo.png';
import plumberLogo from './logos/plumber.png';
import pirollLogo from './logos/piroll.png';
import startUpProjectLogo from './logos/start-up_project.png';
import theHamLogo from './logos/the-ham.png';
import viboLogo from './logos/vibo.png';
import { CardTypes } from './card';

export const cards: CardTypes[] = [
  {
    title: 'Kallyas',
    link: paths.kallyas,
    logoSrc: kallyasLogo,
    isBlur: true,
    styles: {
      color: theme.palette.white,
      '&:after': {
        content: '"."',
        color: theme.palette.red,
      },
    } as CSSProperties,
  },
  {
    title: 'MoGo',
    link: paths.mogo,
    logoSrc: mogoLogo,
    isBlur: true,
    styles: {
      color: theme.palette.white,
    } as CSSProperties,
  },
  {
    title: 'Piroll',
    link: paths.piroll,
    logoSrc: pirollLogo,
    isBlur: true,
    styles: {
      color: theme.palette.white,
    } as CSSProperties,
  },
  {
    link: paths.plumber,
    logoSrc: plumberLogo,
    backgroundColor: '#1b1c4a',
    styles: {
      color: '#ef3d01',
    } as CSSProperties,
  },
  {
    link: paths.startUpAgency,
    title: 'Start-Up Agency',
    logoSrc: startUpProjectLogo,
    styles: {
      color: theme.palette.white,
    } as CSSProperties,
  },
  { link: paths.theHame, logoSrc: theHamLogo, styles: {} },
  {
    link: paths.vibo,
    title: 'Vibo',
    logoSrc: viboLogo,
    styles: {
      color: theme.palette.white,
      '&:after': {
        color: theme.palette.red,
      },
    } as CSSProperties,
  },
];
