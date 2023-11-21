export interface Palette {
  black: string;
  white: string;
  grey: string;
  red: string;
  blue: string;

  mainGradient: string;
  boxShadow: string;
}

export const palette: Palette = {
  black: '#000',
  white: '#ffffff',
  grey: '#808080',
  red: '#ff0000',
  blue: '#90afc1',

  mainGradient: 'linear-gradient(120deg, #E4F5FF 0%, #90AFC1 100.86%)', // main background
  boxShadow: '15px 15px 15px 0px rgba(0, 0, 0, 0.50)',
};
