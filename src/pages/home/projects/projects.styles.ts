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
    marginTop: theme.spacing(1.5),
    marginLeft: 0,
    display: 'grid',
    height: '1px',
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
    height: '100%',
    paddingRight: 0,
    gridTemplateRows: '1fr',
  },
}));
