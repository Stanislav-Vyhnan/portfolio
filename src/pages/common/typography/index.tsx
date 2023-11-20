import styled from '@emotion/styled';

import { theme } from 'src/theme';

export interface TypographyProps {
  fontSize?: number;
  fontWeight?: number;
  component?: 'div' | 'span' | 'time' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  textAlign?: 'left' | 'center' | 'right';
  lineHeight?: string | number;
  letterSpacing?: number;
  color?: keyof typeof theme.palette;
  opacity?: number;
  className?: string;
  children: React.ReactNode;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}

export const Typography = ({
  fontSize = 16,
  fontWeight = 400,
  component = 'span',
  color = 'black',
  className = '',
  opacity,
  lineHeight,
  letterSpacing,
  textAlign,
  children,
  textTransform,
}: TypographyProps) => {
  const Component = styled(component)(() => ({
    fontSize,
    textAlign,
    fontWeight,
    lineHeight,
    letterSpacing,
    opacity,
    color: theme.palette[color],
    margin: 0,
    textTransform,
  }));
  return <Component className={className}>{children}</Component>;
};
