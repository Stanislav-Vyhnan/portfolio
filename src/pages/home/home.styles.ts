import styled from '@emotion/styled';

export const HomeWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: theme.spacing(8),

  display: 'flex',
  justifyContent: 'center',
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
  flexWrap: 'wrap',
}));
