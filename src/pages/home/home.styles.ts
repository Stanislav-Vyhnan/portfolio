import styled from '@emotion/styled';

export const HomeWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: theme.spacing(8),

  display: 'flex',
  justifyContent: 'center',

  '@media screen and (max-width:767px)': {
    padding: theme.spacing(4),
  },

  '@media screen and (max-width:420px)': {
    padding: theme.spacing(2),
  },
}));

export const Container = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '896px',

  height: '100%',
  maxHeight: '640px',

  backgroundColor: '#F3F8FE',
  padding: theme.spacing(2.5),
  boxShadow: theme.palette.boxShadow,
  borderRadius: '20px',

  display: 'flex',

  '@media screen and (max-width:767px)': {
    alignItems: 'center',
  },

  '@media screen and (max-width:570px)': {
    maxHeight: '100%',
    flexDirection: 'column',
  },
}));
