/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-empty-function */

import { CSSProperties, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { theme } from 'src/theme';
import { scrollSettings } from 'src/constants/scroll.settings';

import { CardImage, CardStyled, CardTitle } from './card.styles';

export type CardTypes = {
  id: number;
  styles: CSSProperties;
  link: string;
  title?: string;
  setFirstCardRef?: (cardRef: HTMLLIElement) => void;
  logoSrc?: string;
  backgroundColor?: string;
  isBlur?: boolean;
  enableAnimation?: boolean;
};

const Card = ({
  id,
  title,
  setFirstCardRef = () => {},
  enableAnimation = true,
  link,
  styles,
  logoSrc,
  backgroundColor,
  isBlur,
}: CardTypes) => {
  const cardRef = useRef<HTMLLIElement | null>(null);
  const navigate = useNavigate();

  const onClick = () => {
    navigate(link);
  };

  useEffect(() => {
    if (cardRef.current && id === 0) {
      setFirstCardRef(cardRef.current);
    }
  }, [cardRef]);

  useEffect(() => {
    if (enableAnimation && cardRef.current) {
      cardRef.current.scrollIntoView(scrollSettings);
    }
  }, [enableAnimation]);

  return (
    <CardStyled
      $enableAnimation={enableAnimation}
      $backgroundColor={backgroundColor ?? theme.palette.white}
      onClick={onClick}
      ref={cardRef}
    >
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
