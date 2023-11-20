import { palette, Palette } from './palette';
import { mixins, Mixins } from './mixins';

interface Typography {
  fontFamily: string;
}

export interface ThemeOptions {
  typography: Typography;
  palette: Palette;
  mixins: Mixins;
  spacing: (...numbers: number[]) => string;
}

const currentSpacing = 8;
const spacing = (...numbers: number[]): string =>
  numbers.map(number => `${number * currentSpacing}px`).join(' ');

export const theme: ThemeOptions = {
  typography: {
    fontFamily: `'Source Code Pro', monospace`,
  },
  palette,
  mixins,
  spacing: spacing,
};
