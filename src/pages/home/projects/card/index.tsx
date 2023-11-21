import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

import { theme } from 'src/theme';

import { CardImage, CardStyled, CardTitle } from './card.styles';

export type CardTypes = {
  styles: CSSProperties;
  link: string;
  title?: string;
  logoSrc?: string;
  backgroundColor?: string;
  isBlur?: boolean;
};

const Card = ({ title, link, styles, logoSrc, backgroundColor, isBlur }: CardTypes) => {
  const navigate = useNavigate();

  const onClick = () => {
    console.log(link);
    navigate(link);
  };

  return (
    <CardStyled $backgroundColor={backgroundColor ?? theme.palette.white} onClick={onClick}>
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
