import { CSSProperties } from 'react';

import { theme } from 'src/theme';

import { CardButton, CardImage, CardStyled, CardTitle } from './card.styles';

export type CardTypes = {
  styles: CSSProperties;
  title?: string;
  logoSrc?: string;
  backgroundColor?: string;
  isBlur?: boolean;
};

const Card = ({ title, styles, logoSrc, backgroundColor, isBlur }: CardTypes) => {
  return (
    <CardStyled $backgroundColor={backgroundColor ?? theme.palette.white}>
      <CardButton />
      {logoSrc && <CardImage src={logoSrc} $isBlur={!!isBlur} />}
      <CardTitle
        component="span"
        fontSize={26}
        textAlign="center"
        fontWeight={900}
        $styles={styles}
      >
        {title}
      </CardTitle>
    </CardStyled>
  );
};

export default Card;
