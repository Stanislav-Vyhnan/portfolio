import styled from '@emotion/styled';

export const ProjectsWrapper = styled('div')(({ theme }) => ({
  flex: 1,
  marginLeft: theme.spacing(2.5),
}));

const outsidePaddingY = 128;
const insidePaddingY = 40;
const headerHeight = 42;

export const CardsContainer = styled('ul')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  height: `calc(768px - ${outsidePaddingY}px - ${insidePaddingY}px - ${headerHeight}px)`,
  overflow: 'auto',
  paddingRight: theme.spacing(1.5),

  ...theme.mixins.customScrollbar(),
}));
