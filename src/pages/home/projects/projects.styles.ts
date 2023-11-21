import styled from '@emotion/styled';

// const outsidePaddingY = 128;
// const insidePaddingY = 40;
const headerHeight = 42;
// const oneCardSize = 230;

export const ProjectsWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  flexGrow: 1,
  marginLeft: theme.spacing(2.5),

  '@media screen and (max-width:570px)': {
    marginLeft: 0,
    display: 'grid',
    height: '300px',
  },
}));

export const CardsContainer = styled('ul')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  overflow: 'auto',
  paddingRight: theme.spacing(1.5),
  paddingBottom: theme.spacing(3),

  height: `calc(100% - ${headerHeight}px)`,

  ...theme.mixins.customScrollbar(),

  '@media screen and (max-width:570px)': {
    paddingRight: 0,
    gridTemplateRows: '1fr',
  },

  '@media screen and (max-width:420px)': {
    height: '100%',
  },
}));
