import { CSSProperties } from 'react';

import { Typography } from 'src/pages/common/typography';
import { theme } from 'src/theme';

import { CardsContainer, ProjectsWrapper } from './projects.styles';
import Card, { CardTypes } from './card';
import kallyasLogo from './logos/kallyas.png';
import mogoLogo from './logos/mogo.png';
import plumberLogo from './logos/plumber.png';
import pirollLogo from './logos/piroll.png';
import startUpProjectLogo from './logos/start-up_project.png';
import theHamLogo from './logos/the-ham.png';
import viboLogo from './logos/vibo.png';

const cards: CardTypes[] = [
  {
    title: 'Kallyas',
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
    logoSrc: mogoLogo,
    isBlur: true,
    styles: {
      color: theme.palette.white,
    } as CSSProperties,
  },
  {
    title: 'Piroll',
    logoSrc: pirollLogo,
    isBlur: true,
    styles: {
      color: theme.palette.white,
    } as CSSProperties,
  },
  {
    // title: 'Plumbing Services',
    logoSrc: plumberLogo,
    backgroundColor: '#1b1c4a',
    styles: {
      color: '#ef3d01',
    } as CSSProperties,
  },
  {
    title: 'Start-Up Agency',
    logoSrc: startUpProjectLogo,
    styles: {
      color: theme.palette.white,
    } as CSSProperties,
  },
  {
    logoSrc: theHamLogo,
    styles: {},
  },
  {
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

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Typography component="h2" fontSize={28} fontWeight={700} textAlign="center">
        Projects
      </Typography>
      <CardsContainer>
        {cards.map(({ title, styles, logoSrc, backgroundColor }, index) => (
          <Card
            key={index}
            title={title}
            logoSrc={logoSrc}
            styles={styles}
            backgroundColor={backgroundColor}
          />
        ))}
      </CardsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
