import { CSSProperties } from 'react';

export interface Mixins {
  transition(...properties: string[]): CSSProperties;
  customScrollbar(): CSSProperties;
}

export const mixins: Mixins = {
  transition: (...properties: string[]) => ({
    transition: properties.map(property => `${property} 300ms ease-in-out`).join(', '),
  }),
  customScrollbar: () =>
    ({
      '&::-webkit-scrollbar': {
        width: '10px',
        background: 'white',
      },
      '&::-webkit-scrollbar-track': {
        background: 'grey',
        border: '3px solid white',
        borderRadius: '100px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'grey',
        borderRadius: '100px',
        border: `1px solid white`,
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: 'grey',
      },
    } as CSSProperties),
};
